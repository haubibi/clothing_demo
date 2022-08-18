import './checkout-item.styles.scss';

import { useContext } from 'react';
import { CartContext, CART_ACTION_TYPES } from '../../contexts/cart.context';


import { addCartItemAction, subCartQuantityAction, removeCartItemAction } from '../../store/cart/cart.action';
import { useDispatch } from 'react-redux'

import { CheckoutItemCon, ButtonSpan, ImgContainer} from './checkout-item.styles'




const CheckoutItem = ({cartItem}) =>{
    const {imageUrl,name,quantity,price} = cartItem;
    const dispatch = useDispatch();
    // const {addItemQuantity, subItemQuantity, removeItem} = useContext(CartContext);
    // const {dispatch} = useContext(CartContext);


    const subItemClick = () =>{
        // dispatch({
        //     type : CART_ACTION_TYPES.SUB_CART_QUANTITY,
        //     payload: cartItem
        // });
        // subItemQuantity(cartItem);
        dispatch(subCartQuantityAction(cartItem));
    }
    const addItemClick = () =>{
        // dispatch({
        //     type : CART_ACTION_TYPES.ADD_CART_ITEM,
        //     payload: cartItem
        // });
        dispatch(addCartItemAction(cartItem));
        // addItemQuantity(cartItem);
    }
    const removeItemClick = () =>{
        // dispatch({
        //     type : CART_ACTION_TYPES.REMOVE_CART_ITEM,
        //     payload: cartItem
        // });
        // removeItem(cartItem);
        dispatch(removeCartItemAction(cartItem));

    }


    return (
        <CheckoutItemCon>
            <ImgContainer>
                <img alt = {name} src= {imageUrl} />
            </ImgContainer>
            <div>
                {name}
            </div>
            <div>
                <ButtonSpan onClick={subItemClick}> &#10094; </ButtonSpan>
                <span>{quantity}</span>
                <ButtonSpan onClick={addItemClick}> &#10095;</ButtonSpan>
            </div>
            <div>
                {price}
            </div>
            <div>
                <ButtonSpan onClick={removeItemClick}>&#10005;</ButtonSpan>
            </div>
            {/* {cartItem.name} */}
        </CheckoutItemCon>
    // return (
    //     <div className="checkout-item">
    //         <div className='image-container'>
    //             <img alt = {name} src= {imageUrl} />
    //         </div>
    //         <div className='name'>
    //             {name}
    //         </div>
    //         <div className='add-sub-buttons'>
    //             <span className='button' onClick={subItemClick}> &#10094; </span>
    //             <span>{quantity}</span>
    //             <span className='button' onClick={addItemClick}> &#10095;</span>
    //         </div>
    //         <div className='price'>
    //             {price}
    //         </div>
    //         <div className='delete-button'>
    //             <span className='button' onClick={removeItemClick}>&#10005;</span>
    //         </div>
    //         {/* {cartItem.name} */}
    //     </div>
    )
}

export default CheckoutItem;