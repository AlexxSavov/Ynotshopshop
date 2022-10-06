import {
  UPDATE_PRODUCTS,
} from "../action_types/actionTypes";


const initialState = {
  products: [],
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    default:
      return state;
  }
};

export default productsReducer;
