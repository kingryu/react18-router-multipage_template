import { useState } from 'react';
import { Check, Checked } from 'icons';
import './index.scss';

interface Props {
  checked: boolean;
  onClick?: Function; //点击事件
  children:React.ReactNode;
}

const Checkbox: React.FC<Props> = ({ checked, onClick, children }) => {
  const [selected, setSelected] = useState(checked);
  const clickHanlder = () => {
    setSelected(!selected);
    onClick && onClick(!selected);
  };

  return (
    <div className="checkbox-container" onClick={clickHanlder}>
      {selected ? (
        <Checked className="checkbox checked"></Checked>
      ) : (
        <Check className="checkbox not-checked"></Check>
      )}
      {children}
    </div>
  );
};

export default Checkbox;
