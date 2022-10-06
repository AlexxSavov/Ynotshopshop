import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../action_types/actionTypes";


const updateCategories = (categories) => ({type: UPDATE_CATEGORIES, categories});
const updateCurrentCategory = (currentCategory) => ({type: UPDATE_CURRENT_CATEGORY, currentCategory});


const categoriesActions = {
    updateCategories,
    updateCurrentCategory,
}

export default categoriesActions;
