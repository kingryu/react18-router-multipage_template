import React from 'react';
import Modal, { ImodalProps } from '../Modal';
import './index.scss';

/**
 * 抽屉组件说明
 * @param  {Object}  props
 * @param  {Boolean} props.visible  - 弹框显示隐藏 true显示/false隐藏
 * @param  {Function} props.onClose - 弹框关闭事件
 * @param  {string} props.direction - 抽屉出现方向
 */

interface Props extends ImodalProps {
  direction?: 'left' | 'right' | 'top' | 'bottom'; //抽屉方向
  onClose: React.MouseEventHandler<HTMLDivElement>; //关闭对话框事件
  children: React.ReactNode;
}

const Drawer: React.FC<Props> = ({
  direction = 'bottom',
  visible,
  children,
  onClose,
  ...modalProps
}) => {
  return (
    <Modal
      visible={visible}
      clickMask={onClose}
      {...modalProps}
      className={`xp-drawer-${direction}`}
    >
      {children}
    </Modal>
  );
};

export default Drawer;
