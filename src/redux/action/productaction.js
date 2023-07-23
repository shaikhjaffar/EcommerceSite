
import { ActionTypes } from "../constant/action-type"
export const setProducts=(products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        playload:products
    }
}

export const selectedProducts=(products) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        playload:products
    }
}