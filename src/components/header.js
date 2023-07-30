
import Profile from '../assets/download (1).png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
 const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const getdata = useSelector((state)=> state.cartreducer.carts);
  const getdata1 = useSelector((state)=> state.dataReducer.data);
  console.log(getdata);
  localStorage.setItem('data',getdata.length)

  const toggle = () => setModal(!modal);
  function AddProduct() {
    fetch("https://my-json-server.typicode.com/shaikhjaffar/myserver/Product", {
      method: "POST",
      body: JSON.stringify({
          "id": getdata1.length + 1,
          "title": document.getElementById('product_name').value,
          "description": document.getElementById('product_desc').value,
          "ratting":document.getElementById('product_ratting').value,
          "price": document.getElementById('product_price').value,
          "url": document.getElementById('product_image').value
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      if (res.status !== 200) {
        Swal.fire({
          position: "center",
          icon: "Error",
          title: "Something went wrong try again later",
          showConfirmButton: false,
          timer: 1500,
        });
       toggle()
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Added  Sucessfully",
        showConfirmButton: false,
        timer: 1500,
      });
      toggle()
    });
  }


  return (
    <div className='navbar1'>
     
      <span className='heading'>E-Commerce</span>
      <span style={{fontSize:"large"}}onClick={()=>{
  navigate('/')
}}>Product</span>
      <button className='add_product_btn' onClick={toggle}>AddProduct<FontAwesomeIcon icon={faPlus} style={{color: "#a5df58",}} /></button>
      {/* <button className='add_product_btn' onClick={toggle}>Show Cart Product<FontAwesomeIcon icon={faPlus} style={{color: "#a5df58",}} /></button> */}
<button type="button" class="btn btn-primary position-relative" onClick={()=>{
  navigate('/cart')
}}>
<FontAwesomeIcon icon={faShoppingCart} /> 
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {localStorage.getItem('data')}
    <span class="visually-hidden"></span>
  </span>
</button>
      <div className='profile'>
         <span>Jaffar</span>
         <img src={Profile} alt='profile'/>

      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Product Detail</ModalHeader>
        <ModalBody>
        <div className='modal_input_wrap'>
          <label>Name</label>
          <input id='product_name'/>
        </div>
        <div className='modal_input_wrap'>
          <label>Description</label>
          <input id='product_desc'/>
        </div>
        <div className='modal_input_wrap'>
          <label>Price</label>
          <input id='product_price'/>
        </div>
        <div className='modal_input_wrap'>
          <label>Rating</label>
          <input id='product_ratting'/>
        </div>
        <div className='modal_input_wrap'>
          <label>Image URl</label>
          <input id='product_image' placeholder='paste the url here..'/>
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>{
            AddProduct()
          }}>
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
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps, {})(Header);