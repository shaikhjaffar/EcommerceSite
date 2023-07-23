import React from 'react'
import Profile from '../assets/download (1).png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPencil } from '@fortawesome/free-solid-svg-icons';
export default function ProductComponent() {
  return (
    <div className='product_wrap'>
           <img src={Profile}/>
           <div className='product_main_detail'>
             <span className='product_name'>ABCD</span>
             <span className='product_price'>123345</span>
           </div>
           <div className='product_description'>
            <p>
        dhkjhdjhdsjhdsdshjdsfhjhfjhfjhjhfjhjfshjhsajhjhafshjhfshfxxnb
            </p>
            <div className='action_btn_wrap'>
            <FontAwesomeIcon icon={faTrash} />
            <FontAwesomeIcon icon={faPencil} />
            </div>
          


           </div>
        </div>
  )
}
