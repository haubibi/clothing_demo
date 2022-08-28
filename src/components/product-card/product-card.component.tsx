import { useDispatch } from 'react-redux' 

import Button, {BUTTON_TYPES}from "../button/button.component";
import './product-card.styles.scss';
import { CartContext, CART_ACTION_TYPES } from "../../contexts/cart.context";
import { useContext, useMemo, FC } from "react";

import { addCartItemAction } from '../../store/cart/cart.action';
import { ICategoryItem } from '../../store/categories/categories.types';
import { ICartItem } from '../../store/cart/cart.default';
import {
    ProductCartContainer,
    Footer,
    Name,
    Price,
  } from './product-card.styles';
interface IProductCardProps {
    product: ICategoryItem;
}

const ProductCard:FC<IProductCardProps> = ({product})=>{
    const {imageUrl, name,price } = product;
    const dispatch = useDispatch();
    // const { addCartItem} = useContext(CartContext);
    // const { dispatch} = useContext(CartContext);
    const addClick = () =>{
        dispatch(addCartItemAction(product));
    }


    return(
        // <div className="product-card-container">
        //     <img src = {imageUrl} alt = {`${name}`}></img>
        //     <div className="footer">
        //         <span className="name">{name}</span>
        //         <span className="price">{price}</span>
        //     </div>
        //     <Button buttonType={BUTTON_TYPES.inverted} onClick = {addClick}>Add to card</Button>
        // </div> 
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPES.inverted}
                onClick={addClick}
            >
                Add to card
            </Button>
      </ProductCartContainer>
    )
};


export default ProductCard;