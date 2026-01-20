import React, { Children, cloneElement, useState } from 'react'

const Accordion = ({children, defaultOpenIndex=null}) => {

    const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div>
        {Children.map(children, (child, index) => 
            cloneElement(child)
        )}
    </div>
  )
}

export default Accordion