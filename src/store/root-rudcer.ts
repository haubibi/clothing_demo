import { combineReducers,Reducer, CombinedState, StateFromReducersMapObject, ActionFromReducersMapObject } from 'redux';

import { userReducer } from './user/user.reducer'
import { cartReducer } from './cart/cart.reducer'
import { categoriesReducer } from './categories/categories.reducer';
// import { ICartState } from './cart/cart.default';
// import { IUserState } from './user/user.default';
// import{ ICategoriesState } from './categories/categories.default'

// export interface IRootReducer {
//     user: IUserState;
//     cart: ICartState;
//     categories: ICategoriesState;
// }


export type RootReducerState = ReturnType<typeof rootReducer>;


export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer
}); 