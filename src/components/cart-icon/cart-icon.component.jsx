import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = ({quantity}) =>{
    const { isCartClicked, setIsCartClicked} = useContext(CartContext);
    const cartIconHandle = () =>{
        setIsCartClicked(!isCartClicked)
    }

    return(
        <div className="cart-icon-container" >
            <ShoppingIcon className="shoppong-cion" onClick={cartIconHandle}/>
            <span className="item-count">{quantity}</span>
        </div>
    )
}

export default CartIcon;