import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "../action_types/actionTypes";

export const updateCategories = (categories) => ({type: UPDATE_CATEGORIES, categories});
export const updateCurrentCategory = (currentCategory) => ({type: UPDATE_CURRENT_CATEGORY, currentCategory});

