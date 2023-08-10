import { FC, ReactNode, useEffect } from 'react';

type Props = {
  onClose: () => void;
  children: ReactNode;
};

export const Modal: FC<Props> = ({ onClose, children }) => {
  useEffect(() => {
    document.documentElement.classList.add('is-clipped');
    
    return () => {
      document.documentElement.classList.remove('is-clipped');
    };
  }, []);
  
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      
      <div className="modal-content">
        {children}
      </div>
      
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};
