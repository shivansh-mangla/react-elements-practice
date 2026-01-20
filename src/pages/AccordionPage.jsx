import React from 'react'
import Accordion from '../components/Accordion'
import AccordionItem from '../components/AccordionItem'

const AccordionPage = () => {
  return (
    <div className='accordion-page'>
        <h1>
            Welcome to Accordion Page!!
        </h1>

        <Accordion>
            <AccordionItem header={"Where to get coffee??"}>
                From the store
            </AccordionItem>
            <AccordionItem header={"Where to get Tea??"}>
                From the vending machine
            </AccordionItem>
            <AccordionItem header={"Where to get chaap?"}>
                From Jaiveer Naan chaap
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default AccordionPage