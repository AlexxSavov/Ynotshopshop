import { ADD_MULTIPLE_TO_CART, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_CART, UPDATE_CART_QUANTITY } from "../action_types/actionTypes";



export const addCart = (product) => ({type: ADD_TO_CART, product});
export const addMultipleToCart = (products) => ({type: ADD_MULTIPLE_TO_CART, products});
export const removeFromCart = (_id) => ({type: REMOVE_FROM_CART, _id});
export const clearCart = () => ({type: CLEAR_CART});
export const updateCartQuantity = (_id, purchaseQuantity) => ({type: UPDATE_CART_QUANTITY, _id, purchaseQuantity});
export const toggleCart = () => ({type: TOGGLE_CART });

