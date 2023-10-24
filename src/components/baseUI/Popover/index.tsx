import React from 'react';
import './index.scss';

interface Props {
  className: string;
  visible: boolean; // 气泡显示隐藏 true显示/false隐藏
  position: 'top' | 'right' | 'topright' | 'rightbottom';
  overlay: React.ReactNode;
  onVisibleChange: Function;
  children: React.ReactElement;
}

let winHeight: number;
if (window.innerHeight) {
  winHeight = window.innerHeight;
} else if (document.body && document.body.clientHeight) {
  winHeight = document.body.clientHeight;
}
const Popover: React.FC<Props> = ({
  className,
  visible,
  position,
  overlay,
  children,
  onVisibleChange,
}) => {
  let css = 'xp-popover-bottom';
  if (position) {
    if (position.indexOf('top') > -1) {
      css = 'xp-popover-top';
    }
    if (position.indexOf('right') > -1) {
      css += ' xp-popover-right';
    } else {
      css += ' xp-popover-center';
    }
  } else {
    css += ' xp-popover-center';
  }

  return (
    <div className={className}>
      {React.cloneElement(children, {
        onClick: (e: MouseEvent) => {
          if (winHeight - e.clientY < 115) {
            onVisibleChange(true, 'top');
          } else {
            onVisibleChange(true, 'bottom');
          }
        },
      })}
      {visible ? (
        <div className={'xp-popover ' + css}>
          <div
            className="popover-mask"
            onClick={() => {
              onVisibleChange(false);
            }}
          ></div>
          <div className="popover-content">
            <div className="popover-arrow"></div>
            <div className="popover-inner">{overlay}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Popover;
