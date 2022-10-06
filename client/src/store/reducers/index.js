import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";

const reducers = combineReducers({
    // reduers go here
    productsReducer,
    cartReducer,
    categoriesReducer,
});

export default reducers;
