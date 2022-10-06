import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    // reduers go here
    productsReducer,
    cartReducer,
});

export default reducers;
