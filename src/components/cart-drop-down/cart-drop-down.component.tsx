
import Button, {BUTTON_TYPES} from "../button/button.component";
import { useSelector, useDispatch } from 'react-redux';

// import './cart-drop-down.style.scss';
import CartItem from "../cart-item/cart-item.component";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext, CART_ACTION_TYPES} from '../../contexts/cart.context'
import { CartDropdownContainer, Cartitems, EmptyMessage} from './cart-drop-down.styles'
import { cartItemsSelector } from "../../store/cart/cart.selector";
import { setCartClickedAction } from "../../store/cart/cart.action";


const CartDropDown = () =>{
    // console.log(cartItems)
    // const {isCartClicked, setIsCartClicked} = useContext(CartContext);
    // const { dispatch } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsSelector);
    const checkoutClick = () =>{
        // setIsCartClicked(!isCartClicked)
        // dispatch({
        //     type : CART_ACTION_TYPES.SET_CART_CLICKED
        // })
        dispatch(setCartClickedAction());
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