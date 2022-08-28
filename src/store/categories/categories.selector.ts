import { createSelector } from 'reselect';
import { RootReducerState } from '../root-rudcer';

import { ICategoryMap } from './categories.types';
import { ICategoryItem } from './categories.types';
const catagoriesReducer = (state: RootReducerState) => {
    // console.log('state change')
    return state.categories
};

export const categoriesDataFetchedSelector = createSelector(
    [catagoriesReducer],
    (categoriesSlice) => {
        // console.log(categoriesSlice)
        return categoriesSlice.dataFetched
    }
)

export const categoriesSelector = createSelector(
    [catagoriesReducer],
    (categoriesSlice) => {
        // console.log('reucer Change')
        return categoriesSlice.categories
    }
);


export const categoriesMapSelector = createSelector(
    [categoriesSelector],
    (categoriesData): ICategoryMap => {
        // console.log('categoriesSelector')
        return categoriesData.reduce((pre, current)=>{
            const { title, items} =  current;
                pre[title.toLowerCase()] = items;
            return pre;
        },{} as ICategoryMap) as ICategoryMap;
    }
);



export const isCategoryLoadingSelector = createSelector(
    [catagoriesReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);


// const getCategoriesMap = (state)=> {
//     const {categories} = state.categories;
//     const categoriesMap = Array.prototype.reduce.call(categories,(pre, current)=>{
//         const { title, items} =  current;
//             pre[title.toLowerCase()] = items;
//         return pre;
//     },{})
//     return categoriesMap;
// }





// export const categoriesMapSelector = (state) => {
//     return getCategoriesMap(state)
// };