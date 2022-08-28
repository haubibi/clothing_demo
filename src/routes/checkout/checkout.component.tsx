import { useSelector, useDispatch } from 'react-redux';


import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { cartItemsSelector, cartTotalPriceSelector} from '../../store/cart/cart.selector'

import PaymentForm from '../../components/payment-form/payment-form.component'


// import './checkout.styles.scss';

import {CheckoutContainer, TextCointer, TextSpan, CheckItemContainer, TotalPrice} from './checkout.styles'


const Checkout = () => {
    // const { cartItems, totalPrice } = useContext(CartContext);
    const cartItems = useSelector(cartItemsSelector);
    const totalPrice = useSelector(cartTotalPriceSelector);
    
    return (
        <CheckoutContainer>
            <TextCointer>
                <TextSpan>Product</TextSpan>
                <TextSpan>Description</TextSpan>
                <TextSpan>Quantity</TextSpan>
                <TextSpan>Price</TextSpan>
                <TextSpan>Remove</TextSpan>
            </TextCointer>
            <CheckItemContainer>
                {
                    cartItems.map((cartItem)=>{
                        return(
                            <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
                        )
                    })
                }
            </CheckItemContainer>
            <TotalPrice>
                <h2>{`Total: ${totalPrice}`}</h2>
            </TotalPrice>
            {
                totalPrice> 0 ?<PaymentForm />: null
            }
        </CheckoutContainer>
        // <div className="checkout-container">
        //     <div className="texts-container">
        //         <span>Product</span>
        //         <span>Description</span>
        //         <span>Quantity</span>
        //         <span>Price</span>
        //         <span>Remove</span>
        //     </div>
        //     <div className='checkout-items-container'>
        //         {
        //             cartItems.map((cartItem)=>{
        //                 return(
        //                     <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
        //                 )
        //             })
        //         }
        //     </div>
        //     <div className='total'>
        //         <h2>{`Total: ${totalPrice}`}</h2>
        //     </div>
        // </div>
    )
}

export default Checkout;