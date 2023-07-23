
import Profile from '../assets/download (1).png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function Header() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className='navbar1'>
     
      <span className='heading'>E-Commerce</span>
      <span style={{fontSize:"large"}}>Product</span>
      <button className='add_product_btn' onClick={toggle}>AddProduct<FontAwesomeIcon icon={faPlus} style={{color: "#a5df58",}} /></button>
      <div className='profile'>
         <span>Jaffar</span>
         <img src={Profile} alt='profile'/>

      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Product Detail</ModalHeader>
        <ModalBody>
        <div className='modal_input_wrap'>
          <label>Name</label>
          <input/>
        </div>
        <div className='modal_input_wrap'>
          <label>Description</label>
          <input/>
        </div>
        <div className='modal_input_wrap'>
          <label>Price</label>
          <input/>
        </div>
        <div className='modal_input_wrap'>
          <label>Rating</label>
          <input/>
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            AddProduct
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>      
      

    </div>
  )
}
