import { createContext, useState, useEffect, useReducer } from "react";


export const CART_ACTION_TYPES = {
    SET_CART_CLICKED: 'SET_CART_CLICKED',
    ADD_CART_ITEM: 'ADD_CART_ITEM',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
    ADD_CART_QUANTITY: 'ADD_CART_QUANTITY',
    SUB_CART_QUANTITY: 'SUB_CART_QUANTITY'
}


const CartContext = createContext({
    isCartClicked: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
});

/*
    state = {
        isCartClicked: false,
        cartItems: []
    }
*/


const addCartItem = (cartItems, product)=>{
    const isEsisting = cartItems.find((cartItem)=>cartItem.id === product.id);
    if(!isEsisting) {
        return [...cartItems, {... product, quantity: 1}];
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

const cartReducer = (state, action) =>{
    const { type, payload } = action;
    const { cartItems, isCartClicked } = state;


    switch(type) {
        case CART_ACTION_TYPES.SET_CART_CLICKED:
            return {
                ...state,
                isCartClicked: !isCartClicked
            };
        case CART_ACTION_TYPES.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addCartItem(cartItems, payload)
            };
        case CART_ACTION_TYPES.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(cartItems, payload)
            };
        case CART_ACTION_TYPES.ADD_CART_QUANTITY:
            return {
                ...state,
                cartItems: addItemQuantity(cartItems, payload)
            }
        case CART_ACTION_TYPES.SUB_CART_QUANTITY:
            return {
                ...state,
                cartItems: subItemQuantity(cartItems, payload)
            }
        default:
            throw new Error(`can't find action type ${type} in reducer`);
    }

}

const INITIAL_STATE = {
    isCartClicked: false,
    cartItems: []
}


const CartProvider = ({children}) =>{
    // const [isCartClicked, setIsCartClicked ] = useState(false);
    // const [cartItems, setCartItems ] = useState([]);

    const [{cartItems, isCartClicked}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // console.log(cartItems)

    //这些数据都是通过cartItems得到的 所以可以用useEffect
    useEffect(()=>{
        const newCartCount = cartItems.reduce((pre, current)=>{
            return pre + current.quantity;
        },0);

        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(()=>{
        const newTotalPrice = cartItems.reduce((pre, current)=>{
            return pre + current.price * current.quantity;
        },0);
        setTotalPrice(newTotalPrice);
    },[cartItems]);


    //这些需要传入变量 所以不能
    

    const value = {
        isCartClicked,
        cartItems, 
        cartCount,
        totalPrice,
        dispatch
    };
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider};
