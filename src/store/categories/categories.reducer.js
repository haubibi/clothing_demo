
import { CATEGORIES_ACTION_TYPES } from './categories.types';
import CATEGORIES_INITIA_STATE from './categories.default';

export const categoriesReducer = (state = CATEGORIES_INITIA_STATE, action) => {
    const { type, payload } = action;
    switch(type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: payload
            };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {
                ...state,
                isLoading: true
            };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default: 
            return state;
    }
};