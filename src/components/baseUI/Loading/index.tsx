// import React from 'react'
import Modal, { ImodalProps } from '../Modal';
import './index.scss';
/**
 * 询问框弹框组件说明
 * @param  {Object}  props
 * @param  {Boolean} props.visible  - 弹框显示隐藏 true显示/false隐藏 必填
 */
interface Props extends ImodalProps {
  visible: boolean; //弹框显示隐藏 true显示/false隐藏
  showMask?: boolean; //背景遮罩显示隐藏 true显示/false隐藏
  contentStyle?: object; //内容行内样式
  className?: string; //内容样式class
  maskClass?: string; //背景遮罩样式class
  clickMask?: React.MouseEventHandler<HTMLDivElement>; //点击背景遮罩事件
}

const Loading: React.FC<Props> = ({ ...modalProps }) => {
  return (
    <Modal {...modalProps} maskClass="mask-box">
      <div className={'xp-loader xp-load-hj'}>
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </div>
    </Modal>
  );
};

export default Loading;
