import { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from "../categoriesPreview/categories-preview.component";
import Category from "../category/category.component";
// import { ProductContext } from "../../contexts/categories.context";
// import { CateGoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../category-preview/category-preview.compoennt";
// import ShopCard from '../product-card/product-card.component'
import './shop.styles.scss';

const Shop = () =>{
    //  const {categoriesMap} = useContext(CateGoriesContext);
    return(
        <Routes>
            <Route index element = {<CategoriesPreview />}></Route>
            <Route path = ':category' element = {<Category />}></Route>
        </Routes>
    )
}


export default Shop;