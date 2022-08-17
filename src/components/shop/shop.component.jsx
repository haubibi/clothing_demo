import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from "../categoriesPreview/categories-preview.component";
import Category from "../category/category.component";
// import { ProductContext } from "../../contexts/categories.context";
// import { CateGoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../category-preview/category-preview.compoennt";
// import ShopCard from '../product-card/product-card.component'

import { getCategoriesAndCocuments } from "../../utils/firebase/firebas.utils";
import { setCategoriesAction } from "../../store/categories/categories.action";

import './shop.styles.scss';

const Shop = () =>{
    //  const {categoriesMap} = useContext(CateGoriesContext);
    let [productsFetched, setProductsFetched] = useState(false);


    const dispatch = useDispatch();
      //categories
        useEffect(()=>{ 
            const fetchProducts = async () =>{
                const categories =  await getCategoriesAndCocuments('categories');
                setProductsFetched(true);
                dispatch(setCategoriesAction(categories));
            }
            fetchProducts();

        },[productsFetched]);

  
    return(
        productsFetched && 
        (<Routes>
            <Route index element = {<CategoriesPreview />}></Route>
            <Route path = ':category' element = {<Category />}></Route>
        </Routes>)
    )
}


export default Shop;