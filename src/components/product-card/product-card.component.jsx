
import Button, {BUTTON_TYPES}from "../button/button.component";
import './product-card.styles.scss';
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";


const ProductCard = ({product})=>{
    const {imageUrl, name,price } = product;
    const { addCartItem} = useContext(CartContext);
    const addClick = () =>{
        addCartItem(product);
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