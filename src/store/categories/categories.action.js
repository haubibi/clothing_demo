import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from './categories.types'
import { getCategoriesAndCocuments } from "../../utils/firebase/firebas.utils";





export const fetchCategoriesStartAction = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesErrorAction = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, error);
export const fetchCategoriesSucceedAction = (payload) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload);


export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStartAction());
    try {
        const categories = await getCategoriesAndCocuments('categories');
        dispatch(fetchCategoriesSucceedAction(categories));
    } catch(error) {
        dispatch(fetchCategoriesErrorAction(error));
    }
}