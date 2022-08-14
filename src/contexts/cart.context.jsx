import { createContext, useState, useEffect } from "react";



const CartContext = createContext({
    isclicked: false,
    setIsCartClicked: ()=>{},
    cartItems: [],
    setCartItems: ()=>{},
    cartCount: 0,
    setCartCount: ()=>{},
    totalPrice: 0,
    setTotalPrice: ()=>{}
});


const CartProvider = ({children}) =>{
    const [isCartClicked, setIsCartClicked ] = useState(false);
    const [cartItems, setCartItems ] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

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
    const addCartItem = (product)=>{
        //find the item
        const cartIndex = cartItems.findIndex(cartitem => cartitem.id === product.id);
        if(cartIndex === -1){
            cartItems.push({
                ...product,
                quantity: 1
            })
        } else {
            cartItems[cartIndex].quantity ++;
        }

        setCartItems(JSON.parse(JSON.stringify(cartItems)));
    }
    
    
    const addItemQuantity = (product) => {
        const cartIndex = cartItems.findIndex(cartitem => cartitem.id === product.id);
        cartItems[cartIndex].quantity ++;
        setCartItems(JSON.parse(JSON.stringify(cartItems)));
    }
    const subItemQuantity = (product) => {
        const cartIndex = cartItems.findIndex(cartitem => cartitem.id === product.id);
        const quantity = cartItems[cartIndex].quantity;
        if(quantity>1){
            cartItems[cartIndex].quantity --;
        } else {
            cartItems.splice(cartIndex, 1);
        }
        setCartItems(JSON.parse(JSON.stringify(cartItems)));
    }
    
    const removeItem= (product) => {
        const cartIndex = cartItems.findIndex(cartitem => cartitem.id === product.id);
        cartItems.splice(cartIndex, 1);
    
        setCartItems(JSON.parse(JSON.stringify(cartItems)));
    }
    



    const value = {
        isCartClicked, 
        setIsCartClicked, 
        setCartItems, 
        cartItems, 
        cartCount,
        totalPrice,
        addCartItem, 
        addItemQuantity,
        subItemQuantity,
        removeItem
    };
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider};
