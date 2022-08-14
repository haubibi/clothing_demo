
import Button from "../button/button.component";
import './cart-drop-down.style.scss';
import CartItem from "../cart-item/cart-item.component";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from '../../contexts/cart.context'


const CartDropDown = ({cartItems}) =>{
    // console.log(cartItems)
    const {isCartClicked, setIsCartClicked} = useContext(CartContext);
    const checkoutClick = () =>{
        setIsCartClicked(!isCartClicked)
    }
    return(
        <div className="cart-dropdown-container">
            <span className="empty-message">empty message</span>
            <div className="cart-items ">
            {
                cartItems.map((cartItem )=> {
                    return <CartItem cartitem=  {cartItem} key = {cartItem.id} />;
                })
            }
            {
                cartItems.length > 0 && 
                <Link to = '/checkout'>
                    <Button buttonType={"inverted" } onClick = {checkoutClick}>CHECK OUT</Button>
                </Link>
            }
            </div>
        </div>
    )
};


export default CartDropDown;