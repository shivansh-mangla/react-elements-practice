import React from 'react'
import './styles/accordion-item.css'

const AccordionItem = ({isOpen, onToggle, header, children}) => {
  return (
    <div className='accordion-item'>
        <h3 className='accordion-item-title'>
            <button
                onClick={onToggle}    
            >
                {header}
            </button>
        </h3>

        {isOpen &&
            <h4 className='accordion-item-desc'>
                {children}
            </h4>
        }
    </div>
  )
}

export default AccordionItem