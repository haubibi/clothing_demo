import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';
 

import './checkout.styles.scss';
const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);
    
    return (
        <div className="checkout-container">
            <div className="texts-container">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <div className='checkout-items-container'>
                {
                    cartItems.map((cartItem)=>{
                        return(
                            <CheckoutItem key = {cartItem.id} cartItem={cartItem}/>
                        )
                    })
                }
            </div>
            <div className='total'>
                <h2>{`Total: ${totalPrice}`}</h2>
            </div>
        </div>
    )
}

export default Checkout;