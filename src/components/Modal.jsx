import React, { useEffect } from 'react'
import './styles/modal.css'
import { createPortal } from 'react-dom';


const modalRoot = document.getElementById("modal-root");

const Modal = ({title, isOpen, onClose, children}) => {

    useEffect(()=>{
        console.log("Heloooooooooooo")
        if(!isOpen)
            return;

        const handleEscape = (e) => {
            if(e.key === 'Escape')
                onClose();
        }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };

    }, [isOpen, onClose]);


    if(!isOpen)
        return null;


  return createPortal(
    <div className='modal-overlay' onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <header>
                <h2 className='modal-title'>
                    {title}
                </h2>
                <button onClick={onClose}>
                    X
                </button>
            </header>
            <section>
                {children}
            </section>
        </div>
    </div>, modalRoot
  )
}

export default Modal