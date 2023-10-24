import React, { useEffect } from 'react';
import Modal, { ImodalProps } from '../Modal';
import clsx from 'clsx';
import './index.scss';
/**
 * 模态框组件说明
 * @param  {Object}  props
 * @param  {Boolean} props.visible  - 弹框显示隐藏 true显示/false隐藏 必填
 * @param  {Boolean} [props.showMask] - 背景显示隐藏 true显示/false隐藏
 * @param  {String} [props.maskClass] - 背景样式
 * @param  {String} [props.className] - 内容样式
 * @param  {Function} props.onClose - 弹框关闭事件
 */

interface Props extends ImodalProps {
  onClose: React.MouseEventHandler<HTMLDivElement>; //关闭对话框事件
  showCloseIcon?: Boolean; //展示关闭icon
  children: React.ReactNode;
}

const Dialog: React.FC<Props> = ({
  onClose,
  children,
  className,
  showCloseIcon = true,
  ...modalProps
}) => {
  useEffect(() => {
    if (!showCloseIcon) setTimeout(onClose, 2000);
  }, [showCloseIcon]);
  return (
    <Modal {...modalProps} className={clsx('xp-dialog-content', className)}>
      {showCloseIcon && <div className="xp-dialog-close" onClick={onClose} />}
      {children}
    </Modal>
  );
};

export default Dialog;
