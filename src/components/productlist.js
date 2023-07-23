import React from 'react'
import { useSelector } from 'react-redux'
import ProductComponent from './productComponent'

export default function Productlist() {
    const product = useSelector((state)=> state)
    console.log(product)
  return (
    <div className="product_list_wrap">
       <button id='sort_btn' className='sort_btn' onClick={()=>{
         if(document.getElementById('sort_btn').classList.contains('cross')){
          document.getElementById('sort_btn').classList.remove('cross')
         }
         else {
          document.getElementById('sort_btn').classList.add('cross')

         }
      
       }}>Sort by price</button>
        <ProductComponent/>
        <ProductComponent/>
        <ProductComponent/>
    </div>
  )
}
