

import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils"; 
import { IAction, IActionWithPayload } from "../../utils/reducer/reducer.utils";
import { ICartItem } from './cart.default';

import { matchCreateActions } from "../../utils/reducer/reducer.utils";
import { ICategory } from "../categories/categories.types";

import { ICategoryItem } from "../categories/categories.types";

export type SetCartClicked = IAction<CART_ACTION_TYPES.SET_CART_CLICKED>;
export type AddCartItem = IActionWithPayload<CART_ACTION_TYPES.ADD_CART_ITEM, ICategoryItem>;
export type RemoveCartItem = IActionWithPayload<CART_ACTION_TYPES.REMOVE_CART_ITEM, ICategoryItem>;
export type AddCartQuantityItem = IActionWithPayload<CART_ACTION_TYPES.ADD_CART_QUANTITY, ICategoryItem>;
export type SubCartQuantityItem = IActionWithPayload<CART_ACTION_TYPES.SUB_CART_QUANTITY, ICategoryItem>;
export type ClearCart = IAction<CART_ACTION_TYPES.CLEAR_CART>;


export type ICartActions = SetCartClicked | AddCartItem | RemoveCartItem | AddCartQuantityItem | SubCartQuantityItem | ClearCart;


// export const setCartClickedAction = ():SetCartClicked => createAction(CART_ACTION_TYPES.SET_CART_CLICKED);
// export const addCartItemAction = (cartItem: ICartItem):AddCartItem => createAction(CART_ACTION_TYPES.ADD_CART_ITEM, cartItem);
// export const removeCartItemAction = (cartItem: ICartItem):RemoveCartItem => createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, cartItem);
// export const addCartQuantityAction = (cartItem: ICartItem):AddCartQuantityItem => createAction(CART_ACTION_TYPES.ADD_CART_QUANTITY, cartItem);
// export const subCartQuantityAction = (cartItem: ICartItem):SubCartQuantityItem => createAction(CART_ACTION_TYPES.SUB_CART_QUANTITY, cartItem);
// export const clearCartAction = ():ClearCart => createAction(CART_ACTION_TYPES.CLEAR_CART);



export const setCartClickedAction = matchCreateActions(
    () :SetCartClicked => createAction(CART_ACTION_TYPES.SET_CART_CLICKED)
);
export const addCartItemAction = matchCreateActions(
    (cartItem: ICategoryItem):AddCartItem => createAction(CART_ACTION_TYPES.ADD_CART_ITEM, cartItem)
);
export const removeCartItemAction = matchCreateActions(
    (cartItem: ICategoryItem):RemoveCartItem => createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, cartItem)
);
export const addCartQuantityAction = matchCreateActions(
    (cartItem: ICategoryItem):AddCartQuantityItem => createAction(CART_ACTION_TYPES.ADD_CART_QUANTITY, cartItem)
);
export const subCartQuantityAction = matchCreateActions(
    (cartItem: ICategoryItem):SubCartQuantityItem => createAction(CART_ACTION_TYPES.SUB_CART_QUANTITY, cartItem)
);
export const clearCartAction = matchCreateActions(
    (): ClearCart => createAction(CART_ACTION_TYPES.CLEAR_CART)
);
