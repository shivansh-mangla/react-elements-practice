import React, { useState } from 'react'
import Modal from '../components/Modal'

const ModalPage = () => {

    const [openIndex, setOpenIndex] = useState(null);
    //null means no modal is open

  return (
    <div className='modal-page'>
        <h1>
            Welcome to Modal Page!!
        </h1>

        <Modal 
            title="Click for 1st anouncement!!" 
            isOpen= {openIndex===0}
            onClose= {()=>setOpenIndex(null)}
        >
            <form>
                <label>
                    Enter name: 
                </label>
                <input type="text" />
                <br />
                <label>
                    Enter Age: 
                </label>
                <input type="text" />
                <br />
                <label>
                    Enter Gender: 
                </label>
                <input type="text" />

                <br /><br />

                <button type="submit">
                    Submit here
                </button>
            </form>
        </Modal>

        <Modal 
            title="Click for 2nd anouncement!!" 
            isOpen= {openIndex===1}
            onClose= {()=>setOpenIndex(null)}
        >
            Hellooooo2
        </Modal>

        <button onClick={()=>setOpenIndex(0)}>
            Open 1st Modal
        </button>

        <button onClick={()=>setOpenIndex(1)}>
            Open 2nd Modal
        </button>
    </div>
  )
}

export default ModalPage