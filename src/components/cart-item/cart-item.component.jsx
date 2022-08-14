import './cart-item.styles.scss'
const CartItem = ({cartitem}) =>{
    // console.log(cartitem)
    const { name, imageUrl, price, quantity} = cartitem;
    return(
        <div className="cart-item-container">
            <img alt= {name} src = {imageUrl}></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {`${quantity} x ${price}`}
                </span>
            </div>
        </div>
    )
}

export default CartItem;