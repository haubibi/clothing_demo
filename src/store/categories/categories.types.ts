export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = 'SET_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR',
}


export interface ICategoryItem {
    id: string;
    imageUrl:string;
    name: string;
    price: number;
}
export interface ICategory {
    title: string;
    items:ICategoryItem[]
}


export interface ICategoryMap {
    [key: string]: ICategoryItem[];
};


// export const CATEGORIES_ACTION_TYPES = {
//     // SET_CATEGORIES: 'SET_CATEGORIES'
//     FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
//     FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
//     FETCH_CATEGORIES_ERROR: 'FETCH_CATEGORIES_ERROR'

// }