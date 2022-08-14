import { useContext } from "react";
import {ProductContext } from "../../contexts/products.context";
import ShopCard from '../product-card/product-card.component'
import './products.styles.scss';

const Shop = () =>{
    const {products} = useContext(ProductContext);

    return(
        <div className="products-container">
            {
                products.map((product)=>{
                    const {id} = product;
                    return <ShopCard key = {id} product = {product}></ShopCard>
                })
            }
        </div>
    )
}


export default Shop;