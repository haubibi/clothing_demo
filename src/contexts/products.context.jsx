import { createContext, useState } from "react";
import  ProductJson  from '../shop-data-json/shop-data.json'

const ProductContext = createContext({
    products: [],
    setProducts: ()=> {}
});


const ProductsProvider = ({children}) =>{
    const [products, setProducts] = useState(ProductJson);
    const value = { products, setProducts};
    return (
        <ProductContext.Provider value = {value}>{children}</ProductContext.Provider>
    )
}


export {ProductContext , ProductsProvider};