import React from 'react'
import AddressMap from './ContentTypes/AddressMap'
import './Modal.css'

const Modal = () => {
  return (
    <div className="modal active" onClick={() => console.log("closed")}>

            <div className="modalContentVar" onClick={e => e.stopPropagation()}>
              
                
                <AddressMap/>
              

            </div>

        </div >
  )
}

export default Modal