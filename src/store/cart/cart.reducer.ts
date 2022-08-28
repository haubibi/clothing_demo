import { CART_ACTION_TYPES } from './cart.types';
import CART_INITIAL_STATE from './cart.default';

import { ICartItem } from './cart.default';
import { ICategoryItem } from '../categories/categories.types';
import { ICartState } from './cart.default';
import { ICartActions } from './cart.action';

import { AnyAction } from 'redux';
import {
    setCartClickedAction,
    addCartItemAction,
    removeCartItemAction,
    addCartQuantityAction,
    subCartQuantityAction,
    clearCartAction
} from './cart.action'


const addCartItem = (cartItems: ICartItem[], product: ICategoryItem): ICartItem[]=>{
    const isEsisting = cartItems.find((cartItem)=>cartItem.id === product.id);
    if(!isEsisting) {
        return [...cartItems, {...product, quantity: 1}];
    } else {
        return cartItems.map((cartitem)=>{
            return cartitem.id === product.id?
                {...cartitem, quantity: cartitem.quantity + 1}:
                cartitem
        });
    }
}

const removeCartItem= (cartItems: ICartItem[], product: ICategoryItem): ICartItem[] => {
    return cartItems.filter((cartItem)=>{
        return cartItem.id !== product.id;
    });
    // setCartItems(JSON.parse(JSON.stringify(cartItems)));
}

const addItemQuantity = (cartItems : ICartItem[], product: ICategoryItem): ICartItem[] => {
    return cartItems.map((cartItem) => {
        return cartItem.id === product.id?
            {...cartItem, quantity: cartItem.quantity + 1}:
            cartItem;
    });
    // setCartItems(JSON.parse(JSON.stringify(cartItems)));
}

const subItemQuantity = (cartItems: ICartItem[], product: ICategoryItem): ICartItem [] => {
    return cartItems.map((cartTtem) => {
        return cartTtem.id === product.id ? 
            (cartTtem.quantity -1) > 0?{ ...cartTtem, quantity: cartTtem.quantity -1}: null :
            cartTtem
    }).filter((cartTtem)=>{
        return cartTtem !== null;
    }) as ICartItem[];

    // setCartItems(JSON.parse(JSON.stringify(cartItems)));
}

const getCartCount = (cartItems: ICartItem[] = []): number =>{
    // console.log(cartItems)
    return  cartItems.reduce((pre, current)=>{
        return pre + current.quantity;
    },0);
}

const getTotalPrice = (cartItems: ICartItem[]): number =>{
    return cartItems.reduce((pre, current)=>{
        return pre + current.price * current.quantity;
    },0);
}




export const cartReducer = (state:ICartState = CART_INITIAL_STATE, action = {} as AnyAction) =>{
    // const { type, payload } = action;
    const { cartItems, isCartClicked } = state;
    let  newCartItems: ICartItem [] = [];
    let newIsCartClicked: boolean;


    if(setCartClickedAction.match(action)){
        newIsCartClicked = !isCartClicked;
    } else {
        newIsCartClicked = isCartClicked;
    }
    // console.log(type === CART_ACTION_TYPES.SET_CART_CLICKED, newIsCartClicked)

    if(setCartClickedAction.match(action)){
        newCartItems = cartItems;
    }
    if(addCartItemAction.match(action)){
        newCartItems = addCartItem(cartItems, action.payload);
    }
    if(removeCartItemAction.match(action)){
        newCartItems = removeCartItem(cartItems, action.payload)
    }
    if(addCartQuantityAction.match(action)){
        newCartItems = addItemQuantity(cartItems, action.payload);
    }
    if(subCartQuantityAction.match(action)){
        newCartItems = subItemQuantity(cartItems, action.payload);
    }
    if(clearCartAction.match(action)){
        newCartItems = [];
    }
    if(
        setCartClickedAction.match(action) || 
        addCartItemAction.match(action) || 
        removeCartItemAction.match(action) ||
        addCartQuantityAction.match(action) ||
        subCartQuantityAction.match(action) ||
        clearCartAction.match(action)
    ){
        const newCartCount: number = getCartCount(newCartItems);
        const newTotalPrice: number = getTotalPrice(newCartItems);
        return {
            ...state,
            isCartClicked: newIsCartClicked,
            cartItems: newCartItems,
            cartCount: newCartCount,
            totalPrice: newTotalPrice
        }
    }

    return state;
    // switch(action.type) {
    //     case CART_ACTION_TYPES.SET_CART_CLICKED:
    //         newCartItems = cartItems;
    //         break;
    //     case CART_ACTION_TYPES.ADD_CART_ITEM:
    //         newCartItems = addCartItem(cartItems, action.payload);
    //         break;
    //     case CART_ACTION_TYPES.REMOVE_CART_ITEM:
    //         newCartItems = removeCartItem(cartItems, action.payload);
    //         break;
    //     case CART_ACTION_TYPES.ADD_CART_QUANTITY:
    //         newCartItems = addItemQuantity(cartItems, action.payload);
    //         break;
    //     case CART_ACTION_TYPES.SUB_CART_QUANTITY:
    //         newCartItems = subItemQuantity(cartItems, action.payload);
    //         break;
    //     case CART_ACTION_TYPES.CLEAR_CART:
    //         newCartItems = [];
    //         break;
    //     default:
    //         return state;
    // }

    
    // const newCartCount: number = getCartCount(newCartItems);
    // const newTotalPrice: number = getTotalPrice(newCartItems);


    // // console.log(type === CART_ACTION_TYPES.SET_CART_CLICKED, newIsCartClicked)
    // return {
    //     ...state,
    //     isCartClicked: newIsCartClicked,
    //     cartItems: newCartItems,
    //     cartCount: newCartCount,
    //     totalPrice: newTotalPrice
    // }
}