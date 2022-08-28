// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import './cart-icon.styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from "react";
import { CartContext, CART_ACTION_TYPES } from "../../contexts/cart.context";

import { CartIconCon, ShoppingIcon, ItemCount} from './cart-icon.styles'
import { cartCountSelector } from '../../store/cart/cart.selector';
import { setCartClickedAction } from '../../store/cart/cart.action'


const CartIcon = () =>{
    // const { isCartClicked, setIsCartClicked} = useContext(CartContext);
    const cartCount = useSelector(cartCountSelector);
    // const { dispatch } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartIconHandle = () =>{
        dispatch(setCartClickedAction());
        // dispatch({
        //     type : CART_ACTION_TYPES.SET_CART_CLICKED
        // })
        // setIsCartClicked(!isCartClicked)
    }

    return(
        <CartIconCon onClick={cartIconHandle}>
            <ShoppingIcon/>
            <ItemCount >{cartCount}</ItemCount>
        </CartIconCon>
    )
}

export default CartIcon;