
import Button from "../button/button.component";
import './product-card.styles.scss';
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";


const ShopCard = ({product})=>{
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
            <Button buttonType="inverted" onClick = {addClick}>Add to card</Button>
        </div>
    )
};


export default ShopCard;