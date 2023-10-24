import React, { useState } from 'react';
import { Radio as Check, Radio2 as Checked } from 'icons';
import './index.scss';

interface Props {
  selValue?: string | number;
  value: string | number;
  onClick?: Function; //点击事件
  disable?: boolean;
  children: React.ReactNode;
}

const Radio: React.FC<Props> = ({
  selValue = '',
  value,
  onClick,
  disable = false,
  children,
}) => {
  const clickHanlder = () => {
    onClick && onClick(value);
  };

  const checked = selValue === value;

  let container = 'radio-container';
  if (disable) {
    container += ' disable';
  }

  return (
    <div className={container} onClick={clickHanlder}>
      {checked ? (
        <Checked className="radio-box checked"></Checked>
      ) : (
        <Check className="radio-box not-checked"></Check>
      )}

      {children}
    </div>
  );
};

interface GroupProps {
  value: string;
  onChange?: Function; //点击事件
  children: React.ReactElement<Props>[];
  disable?: boolean;
}

export const RadioGroup: React.FC<GroupProps> = ({
  value,
  onChange,
  children,
  disable = false,
}) => {
  const [selValue, setSelValue] = useState(value);

  const clickHanlder = (value: string) => {
    if (!disable) {
      setSelValue(value);
      onChange && onChange(value);
    }
  };

  return (
    <div className="radio-group-container">
      {children &&
        React.Children.map(children, (child, i) => {
          if (child) {
            return React.cloneElement(child, {
              selValue: selValue,
              disable: disable,
              onClick: clickHanlder,
            });
          }
        })}
    </div>
  );
};

export default Radio;
