
import { CATEGORIES_ACTION_TYPES } from './categories.types';
import CATEGORIES_INITIA_STATE from './categories.default';

import { ICategoryAction } from './categories.action';

import { AnyAction } from 'redux'

import { fetchCategoriesStartAction, fetchCategoriesErrorAction, fetchCategoriesSucceedAction} from './categories.action';

import { ICategoriesState } from './categories.default'



export const categoriesReducer = (state = CATEGORIES_INITIA_STATE, action: AnyAction): ICategoriesState => {
    // const { type, payload } = action;

    if(fetchCategoriesStartAction.match(action)){
        return {
            ...state,
            isLoading: true
        };
    }
    if(fetchCategoriesErrorAction.match(action)){
        return {
            ...state,
            isLoading: false,
            error: action.payload
        };
    }
    if(fetchCategoriesSucceedAction.match(action)){
        return {
            ...state,
            dataFetched: true,
            isLoading: false,
            categories: action.payload
        };
    }


    return state;

    // switch(action.type) {
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
    //         return {
    //             ...state,
    //             isLoading: false,
    //             categories: action.payload
    //         };
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
    //         return {
    //             ...state,
    //             isLoading: true
    //         };
    //     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
    //         return {
    //             ...state,
    //             isLoading: false,
    //             error: action.payload
    //         };
    //     default: 
    //         return state;
    // }
};