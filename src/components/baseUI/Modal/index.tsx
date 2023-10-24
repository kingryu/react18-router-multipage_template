import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const zIndex = 1000;
const domNode = document.createElement('div');
domNode.setAttribute('name', 'classx-modal');
document.body.appendChild(domNode);
export interface ImodalProps {
  visible: boolean; //弹框显示隐藏 true显示/false隐藏
  showMask?: boolean; //背景遮罩显示隐藏 true显示/false隐藏
  contentStyle?: object; //内容行内样式
  className?: string; //内容样式class
  maskClass?: string; //背景遮罩样式class
  clickMask?: React.MouseEventHandler<HTMLDivElement>; //点击背景遮罩事件
  title?: string | React.ReactNode;
  children: React.ReactNode;
}

const Modal: React.FC<ImodalProps> = ({
  visible,
  showMask = true,
  contentStyle = {},
  className = '',
  maskClass = '',
  children,
  clickMask = () => {},
  title = '',
}) => {
  let maskStyle = {};
  let _contentStyle = { ...contentStyle };

  if (visible) {
    if (showMask) {
      maskStyle = {
        zIndex,
      };
    }
    _contentStyle = Object.assign(
      {
        zIndex,
      },
      _contentStyle
    );

    const modalDom = (
      <div className="xp-dialog-box">
        {showMask ? (
          <div
            className={`xp-modal-mask ${maskClass}`}
            onClick={clickMask}
            style={maskStyle}
          />
        ) : null}
        <div className={`xp-modal-content ${className}`} style={_contentStyle}>
          {((typeof title === 'string' && title.length > 0) ||
            typeof title !== 'string') && (
            <h3 className="xp-confirm-title">{title}</h3>
          )}
          {children}
        </div>
      </div>
    );
    return ReactDOM.createPortal(modalDom, domNode);
  } else {
    return null;
  }
};

export default Modal;
