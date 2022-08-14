import './checkout-item.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) =>{
    const {imageUrl,name,quantity,price} = cartItem;
    const {addItemQuantity, subItemQuantity, removeItem} = useContext(CartContext);


    const subItemClick = () =>{
        subItemQuantity(cartItem);
    }
    const addItemClick = () =>{
        addItemQuantity(cartItem);
    }
    const removeItemClick = () =>{
        removeItem(cartItem);
    }


    return (
        <div className="checkout-item">
            <div className='image-container'>
                <img alt = {name} src= {imageUrl} />
            </div>
            <div className='name'>
                {name}
            </div>
            <div className='add-sub-buttons'>
                <span className='button' onClick={subItemClick}> &#10094; </span>
                <span>{quantity}</span>
                <span className='button' onClick={addItemClick}> &#10095;</span>
            </div>
            <div className='price'>
                {price}
            </div>
            <div className='delete-button'>
                <span className='button' onClick={removeItemClick}>&#10005;</span>
            </div>
            {/* {cartItem.name} */}
        </div>
    )
}

export default CheckoutItem;