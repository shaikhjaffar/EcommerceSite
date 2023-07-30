import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPencil,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD, fetch_data_success } from './redux/action'
import {useSelector } from 'react-redux';
import Swal from 'sweetalert2';

 function ProductComponent(props) {
  const dispatch = useDispatch()
  const getdata = useSelector((state)=> state.dataReducer.data);
   
  const send = (e)=>{
    dispatch(ADD(e));
  }
  function delet(id){
   dispatch(fetch_data_success(getdata.filter((obj) => obj.id !== id))) 
   Swal.fire({
    position: "center",
    icon: "success",
    title: "Deleted Sucessfully",
    showConfirmButton: false,
    timer: 1000,
  });
  }
   function EditProduct(id){
    document.getElementById(id).removeAttribute('readonly')
    document.getElementById(`pr_btn_${id}`).classList.add('show')
   }

  return (
    <div className='product_wrap'>
           <img style={{height:"100%",width:"100%"}} src={props.product.url}/>
           <div className='product_main_detail'>

              <h3 className='product_name'>{props.product.title}</h3>
             
             
             <div>
              <span style={{color:"green"}}>Price </span>
              <span className='product_price'>{`₹${props.product.price}`}</span>
             </div>
             
             <div>
              <span style={{color:"green"}}>ratting </span>
              <span className='product_ratting'>{props.product.ratting}</span>
             </div>
             
           </div>
           <div className='product_description'>
            <textarea type='text' id={`${props.product.id}`} defaultValue={props.product.description} readOnly></textarea>
            <div className='action_btn_wrap'>
            <FontAwesomeIcon icon={faTrash} onClick={()=>{
              delet(props.product.id)
            }} />
            <FontAwesomeIcon icon={faPencil} onClick={()=>{
              EditProduct(props.product.id)
            }} />
            <button
             className="btn btn-info btn-lg"  onClick={()=> send(props.product)} >
              <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
        </button>
          <button onClick={()=>{
              document.getElementById(`pr_btn_${props.product.id}`).classList.remove('show')
              document.getElementById(props.product.id).readOnly ="true"

          }}  className= "button-34 hidden"  id={`pr_btn_${props.product.id}`}>Save</button>
            </div>
          


           </div>
        </div>
  )
}
const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
});
export default connect(mapStateToProps, {})(ProductComponent);

