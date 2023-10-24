import React from 'react';
import clsx from 'clsx';

import './Spinner.scss';

export interface SpinnerProps {
  className?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  animate?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  color,
  size = 'medium',
  animate = true,
}) => {
  const block = 'spinner';
  return (
    <svg
      className={clsx(className, block, `${block}--${size}`, {
        [`${block}--animate`]: animate,
      })}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-25 -25 50 50"
      style={{ stroke: color }}
    >
      <g className={`${block}__wrapper`}>
        <circle className={`${block}__circle`} cx={0} cy={0} r={20} />
      </g>
    </svg>
  );
};
