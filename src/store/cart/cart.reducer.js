import { CART_ACTION_TYPES } from './cart.types';
import CART_INITIAL_STATE from './cart.default';


const addCartItem = (cartItems, product)=>{
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

const removeCartItem= (cartItems, product) => {
    return cartItems.filter((cartItem)=>{
        return cartItem.id !== product.id;
    });
    // setCartItems(JSON.parse(JSON.stringify(cartItems)));
}

const addItemQuantity = (cartItems, product) => {
    return cartItems.map((cartItem) => {
        return cartItem.id === product.id?
            {...cartItem, quantity: cartItem.quantity + 1}:
            cartItem;
    });
    // setCartItems(JSON.parse(JSON.stringify(cartItems)));
}

const subItemQuantity = (cartItems, product) => {
    return cartItems.map((cartTtem) => {
        return cartTtem.id === product.id ? 
            (cartTtem.quantity -1) > 0?{ ...cartTtem, quantity: cartTtem.quantity -1}: null :
            cartTtem
    }).filter((cartTtem)=>{
        return cartTtem !== null;
    });

    // setCartItems(JSON.parse(JSON.stringify(cartItems)));
}

const getCartCount = (cartItems = []) =>{
    // console.log(cartItems)
    return  cartItems.reduce((pre, current)=>{
        return pre + current.quantity;
    },0);
}

const getTotalPrice = (cartItems) =>{
    return cartItems.reduce((pre, current)=>{
        return pre + current.price * current.quantity;
    },0);
}




export const cartReducer = (state = CART_INITIAL_STATE, action) =>{
    const { type, payload } = action;
    const { cartItems, isCartClicked } = state;
    let newCartItems, newIsCartClicked;

    if(type === CART_ACTION_TYPES.SET_CART_CLICKED) {
        newIsCartClicked = !isCartClicked;
    } else {
        newIsCartClicked = isCartClicked;
    }
    // console.log(type === CART_ACTION_TYPES.SET_CART_CLICKED, newIsCartClicked)

    switch(type) {
        case CART_ACTION_TYPES.SET_CART_CLICKED:
            newCartItems = cartItems;
            break;
        case CART_ACTION_TYPES.ADD_CART_ITEM:
            newCartItems = addCartItem(cartItems, payload);
            break;
        case CART_ACTION_TYPES.REMOVE_CART_ITEM:
            newCartItems = removeCartItem(cartItems, payload);
            break;
        case CART_ACTION_TYPES.ADD_CART_QUANTITY:
            newCartItems = addItemQuantity(cartItems, payload);
            break;
        case CART_ACTION_TYPES.SUB_CART_QUANTITY:
            newCartItems = subItemQuantity(cartItems, payload);
            break;
        default:
            return state;
    }

    
    const newCartCount = getCartCount(newCartItems);
    const newTotalPrice = getTotalPrice(newCartItems);


    // console.log(type === CART_ACTION_TYPES.SET_CART_CLICKED, newIsCartClicked)
    return {
        ...state,
        isCartClicked: newIsCartClicked,
        cartItems: newCartItems,
        cartCount: newCartCount,
        totalPrice: newTotalPrice
    }
}