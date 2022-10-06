import { UPDATE_PRODUCTS } from "../action_types/actionTypes";

export const updateProducts = (products) => ({type: UPDATE_PRODUCTS, products })

const productActions = {
    updateProducts
}

export default productActions;
