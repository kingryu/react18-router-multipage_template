import { useState, useRef, useMemo, useEffect } from 'react';
import { DotLoading } from 'antd-mobile'
import './index.scss';

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

export default function LoadMore({className, fetchMore, hasMore, children }) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (hasMore && isVisible) {
      fetchMore && fetchMore();
    }
  }, [hasMore, fetchMore, isVisible]);

  let content;
  if (children) {
    content = children;
  } else {
    if (hasMore) {
      content = <div className="bot-more loadmore"><DotLoading color='white' /></div>;
    } else {
      content = <p className="bot-more nomore"></p>;
    }
  }
  let css = "load-more"
  if(className){
    css += ' '+ className
  }

  return (
    <div className={css} ref={ref}>
      {content}
    </div>
  );
}
