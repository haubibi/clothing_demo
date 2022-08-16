// import './cart-item.styles.scss'

import { CartItemCon, CartImg, ItemDetails, NameSpan, PriceSpan} from './cart-item.styles';

const CartItem = ({cartitem}) =>{
    // console.log(cartitem)
    const { name, imageUrl, price, quantity} = cartitem;
    return(
        <CartItemCon>
            <CartImg alt= {name} src = {imageUrl}></CartImg>
            <ItemDetails >
                <NameSpan>{name}</NameSpan>
                <PriceSpan className='price'>
                    {`${quantity} x ${price}`}
                </PriceSpan>
            </ItemDetails>
        </CartItemCon>
        // <div className="cart-item-container">
        //     <img alt= {name} src = {imageUrl}></img>
        //     <div className='item-details'>
        //         <span className='name'>{name}</span>
        //         <span className='price'>
        //             {`${quantity} x ${price}`}
        //         </span>
        //     </div>
        // </div>
    )
}

export default CartItem;