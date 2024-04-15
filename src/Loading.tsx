import { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Loading() {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="loading">
      <span className="loader"></span>
    </div>,
    document.body,
  );
}

export default Loading;
