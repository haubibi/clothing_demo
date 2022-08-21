import { createSelector } from 'reselect';


const catagoriesReducer = (state) => {
    // console.log('state change')
    return state.categories
};

export const categoriesDataFetchedSelector = createSelector(
    [catagoriesReducer],
    (categoriesSlice) => {
        console.log(categoriesSlice)
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
    (categoriesData) => {
        // console.log('categoriesSelector')
        return Array.prototype.reduce.call(categoriesData,(pre, current)=>{
            const { title, items} =  current;
                pre[title.toLowerCase()] = items;
            return pre;
        },{})
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