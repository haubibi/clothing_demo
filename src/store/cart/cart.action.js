
// export const CART_ACTION_TYPES = {
//     SET_CART_CLICKED: 'SET_CART_CLICKED',
//     ADD_CART_ITEM: 'ADD_CART_ITEM',
//     REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
//     ADD_CART_QUANTITY: 'ADD_CART_QUANTITY',
//     SUB_CART_QUANTITY: 'SUB_CART_QUANTITY'
// }


import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils"; 

export const setCartClickedAction = () => createAction(CART_ACTION_TYPES.SET_CART_CLICKED);
export const addCartItemAction = (cartItem) => createAction(CART_ACTION_TYPES.ADD_CART_ITEM, cartItem);
export const removeCartItemAction = (cartItem) => createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, cartItem);
export const addCartQuantityAction = (cartItem) => createAction(CART_ACTION_TYPES.ADD_CART_QUANTITY, cartItem);
export const subCartQuantityAction = (cartItem) => createAction(CART_ACTION_TYPES.SUB_CART_QUANTITY, cartItem);
export const clearCartAction = () => createAction(CART_ACTION_TYPES.CLEAR_CART);