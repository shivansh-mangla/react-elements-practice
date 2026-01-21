import React, { Children, cloneElement, useState } from 'react'

const Accordion = ({children, defaultOpenIndex=null}) => {

    const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div>
        {Children.map(children, (child, index) => 
            cloneElement(child, {
                isOpen: index === openIndex,
                onToggle: () => setOpenIndex(index === openIndex ? null : index),
            })
        )}
    </div>
  )
}

export default Accordion