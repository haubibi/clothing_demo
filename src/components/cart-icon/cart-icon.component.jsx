// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import './cart-icon.styles.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconCon, ShoppingIcon, ItemCount} from './cart-icon.styles'

const CartIcon = ({quantity}) =>{
    const { isCartClicked, setIsCartClicked} = useContext(CartContext);
    const cartIconHandle = () =>{
        setIsCartClicked(!isCartClicked)
    }

    return(
        <CartIconCon>
            <ShoppingIcon  onClick={cartIconHandle}/>
            <ItemCount >{quantity}</ItemCount>
        </CartIconCon>
    )
}

export default CartIcon;