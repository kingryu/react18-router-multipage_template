// import React from 'react'
import './index.scss';
/**
 * 询问框弹框组件说明
 * @param  {Object}  props
 * @param  {String} props.className
 */

const Loading: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={'xp-loader xp-load-hj' + className ? ' ' + className : ''}>
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
  );
};

export default Loading;
