import React, { useEffect } from 'react';
import Modal from '../Modal';
import './index.scss';

/*
使用方法：
  const [toast, setToast] = useState('');

  const showToast = () => {
    setToast('test toast');
  };

  const toastClose = () => {
    setToast('');
  };

  <Toast visible={toast} content={toast} onClose={toastClose}></Toast>
*/

interface Props {
  visible: boolean; //显示隐藏
  toastClass?: string; //额外自定义样式
  timeOut?: number; //展示时间
  type?: number; //1为单行toast模式
  content: string; //toast文本内容
  onClose?: Function; //关闭事件
}

const Toast: React.FC<Props> = ({
  visible,
  toastClass,
  timeOut = 2235,
  content,
  type,
  onClose,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose && onClose();
    }, timeOut);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [content, visible, onClose, timeOut]);

  const renderToastItem = () => {
    if (content !== '') {
      let css = 'xp-toast-info';
      if (type === 1) {
        css = 'xp-toast-input-error';
      }
      if (toastClass) {
        css += ' ' + toastClass;
      }
      return <div className={css}>{content}</div>;
    } else {
      return null;
    }
  };

  return (
    <Modal showMask={false} className="xp-toast" visible={visible}>
      {renderToastItem()}
    </Modal>
  );
};

export default Toast;
