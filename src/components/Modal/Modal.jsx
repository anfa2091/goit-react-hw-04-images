import { useEffect } from "react";
import css from './Modal.module.css'
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById('root');

const Modal = ({onClose, children}) => {

  
  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);
    
    return()=>{
      window.removeEventListener('keydown', handleKeyDown);
    }
    // eslint-disable-next-line
  },[]);
    // eslint-disable-next-line
  
   const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

    return createPortal(
      <div className={css['overlay']} onClick={handleClickBackdrop}>
        <div className={css['modal']}>{children}</div>
      </div>,
      modalRoot
    );
  }

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node
}


export default Modal;