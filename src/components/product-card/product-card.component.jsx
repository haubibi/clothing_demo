import { useDispatch } from 'react-redux' 

import Button, {BUTTON_TYPES}from "../button/button.component";
import './product-card.styles.scss';
import { CartContext, CART_ACTION_TYPES } from "../../contexts/cart.context";
import { useContext } from "react";

import { addCartItemAction } from '../../store/cart/cart.action';


const ProductCard = ({product})=>{
    const {imageUrl, name,price } = product;
    const dispatch = useDispatch();
    // const { addCartItem} = useContext(CartContext);
    // const { dispatch} = useContext(CartContext);
    const addClick = () =>{
        dispatch(addCartItemAction(product));
        // dispatch({
        //     type : CART_ACTION_TYPES.ADD_CART_ITEM,
        //     payload: product
        // });
    }
    return(
        <div className="product-card-container">
            <img src = {imageUrl} alt = {`${name}`}></img>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPES.inverted} onClick = {addClick}>Add to card</Button>
        </div>
    )
};


export default ProductCard;