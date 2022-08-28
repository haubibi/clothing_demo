import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from './categories.types'
import { getCategoriesAndCocuments } from "../../utils/firebase/firebas.utils";

import { IAction, IActionWithPayload, matchCreateActions } from "../../utils/reducer/reducer.utils";
import { ICategoryItem, ICategory } from "./categories.types";

export type FetchCategoriesStart = IAction<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesError= IActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, Error>;
export type FetchCategoriesSucceed = IActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, ICategory[]>;


// const fetchCategoriesStartAction = ():FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
// const fetchCategoriesErrorAction = (error: Error): FetchCategoriesError => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, error);
// const fetchCategoriesSucceedAction = (payload: ICategory[]):FetchCategoriesSucceed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload);

export type ICategoryAction = FetchCategoriesStart | FetchCategoriesError | FetchCategoriesSucceed;


export const fetchCategoriesStartAction = matchCreateActions(
    ():FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);
export const fetchCategoriesErrorAction = matchCreateActions(
    (error: Error): FetchCategoriesError => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR, error)
);
export const fetchCategoriesSucceedAction = matchCreateActions(
    (payload: ICategory[]):FetchCategoriesSucceed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload)
);




// export const fetchCategoriesAsync = () => async (dispatch) => {
//     dispatch(fetchCategoriesStartAction());
//     try {
//         const categories = await getCategoriesAndCocuments('categories');
//         dispatch(fetchCategoriesSucceedAction(categories));
//     } catch(error) {
//         dispatch(fetchCategoriesErrorAction(error));
//     }
// }