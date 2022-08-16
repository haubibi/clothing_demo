
import Button, {BUTTON_TYPES} from "../button/button.component";
// import './cart-drop-down.style.scss';
import CartItem from "../cart-item/cart-item.component";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from '../../contexts/cart.context'
import { CartDropdownContainer, Cartitems, EmptyMessage} from './cart-drop-down.styles'


const CartDropDown = ({cartItems}) =>{
    // console.log(cartItems)
    const {isCartClicked, setIsCartClicked} = useContext(CartContext);
    const checkoutClick = () =>{
        setIsCartClicked(!isCartClicked)
    }
    return(
        <CartDropdownContainer>
            <Cartitems>
            {
                cartItems.length >0 ? cartItems.map((cartItem )=> {
                    return <CartItem cartitem=  {cartItem} key = {cartItem.id} />;
                }):
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }

            {
                cartItems.length > 0 && 
                <Link to = '/checkout'>
                    <Button buttonType={BUTTON_TYPES.inverted } onClick = {checkoutClick}>CHECK OUT</Button>
                </Link>
            }
            </Cartitems>
        </CartDropdownContainer>
    )
};


export default CartDropDown;