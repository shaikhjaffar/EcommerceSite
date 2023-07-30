import React from 'react'
import { useSelector } from 'react-redux';
export default function Cart() {
    const getdata = useSelector((state)=> state.cartreducer.carts);
  return (

        getdata.length !==0 ? getdata.map((product) => (
            <div className='product_wrap'>
            <img style={{height:"100%",width:"100%"}} src={product.url}/>
            <div className='product_main_detail'>
 
               <h3 className='product_name'>{product.title}</h3>
              
              
              <div>
               <span style={{color:"green"}}>Price </span>
               <span className='product_price'>{`₹${product.price}`}</span>
              </div>
              
              <div>
               <span style={{color:"green"}}>ratting </span>
               <span className='product_ratting'>{product.ratting}</span>
              </div>
              
            </div>
            <div className='product_description'>
             <textarea type='text' id={`${product.id}`} defaultValue={product.description} readOnly></textarea>
            </div>
         </div>
              )) : <div className='empty_cart'> You Have Not Added in Any Product to Cart .
              </div>

      
      
  )
}
