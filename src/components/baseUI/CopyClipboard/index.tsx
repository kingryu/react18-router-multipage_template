import React from 'react';
import './index.scss';

interface Props {
  value: string;
  onCopy: Function;
  children: React.ReactNode;
}

/*
  value:string 需要拷贝的内容
  children 是展示拷贝功能的按钮，不需要添加事件
  onCopy:Function 点击拷贝按钮后的回调true拷贝成功 falsh拷贝失败
*/
const CopyClipboard: React.FC<Props> = ({ value, onCopy, children }) => {
  const textAreaRef: React.MutableRefObject<any> = React.useRef();

  const copy = React.useCallback((s: string) => {
    if (textAreaRef.current) {
      textAreaRef.current.value = s;
      textAreaRef.current.select();
      textAreaRef.current.setSelectionRange(0, 99999);
      const success = document.execCommand('copy');
      textAreaRef.current.blur();
      return success;
    }
    return false;
  }, []);

  const handlerCopy = React.useCallback(() => {
    if (copy(value)) {
      onCopy && onCopy(true);
    } else {
      onCopy && onCopy(false);
    }
  }, [copy, value, onCopy]);

  return (
    <div className="copy-btn" onClick={handlerCopy}>
      <textarea ref={textAreaRef} className="copytext" />
      {children}
    </div>
  );
};

export default CopyClipboard;
