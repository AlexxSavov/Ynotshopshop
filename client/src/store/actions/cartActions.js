import { ADD_MULTIPLE_TO_CART, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_CART, UPDATE_CART_QUANTITY } from "../action_types/actionTypes";



const addCart = (product) => ({type: ADD_TO_CART, product});
const addMultipleToCart = (products) => ({type: ADD_MULTIPLE_TO_CART, products});
const removeFromCart = (_id) => ({type: REMOVE_FROM_CART, _id});
const clearCart = () => ({type: CLEAR_CART});
const updateCartQuantity = (purchaseQuantity) => ({type: UPDATE_CART_QUANTITY, purchaseQuantity});
const toggleCart = () => ({type: TOGGLE_CART });


const cartActions = {
    addCart,
    addMultipleToCart,
    removeFromCart,
    clearCart,
    updateCartQuantity,
    toggleCart,
}

export default cartActions;
