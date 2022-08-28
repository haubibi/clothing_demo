import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from "../../components/categoriesPreview/categories-preview.component"
import Category from "../../components/category/category.component";
// import { ProductContext } from "../../contexts/categories.context";
// import { CateGoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../category-preview/category-preview.compoennt";
// import ShopCard from '../product-card/product-card.component'

// import { getCategoriesAndCocuments } from "../../utils/firebase/firebas.utils";
// import { setCategoriesAction } from "../../store/categories/categories.action";

import './shop.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesDataFetchedSelector } from "../../store/categories/categories.selector"; 
import { isCategoryLoadingSelector } from "../../store/categories/categories.selector";
import { fetchCategoriesStartAction } from "../../store/categories/categories.action";
import Spinner from '../../components/spinner/spinner.component'


const Shop = () =>{
    //  const {categoriesMap} = useContext(CateGoriesContext);
    // let [productsFetched, setProductsFetched] = useState(false);
    const isCategoryLoading = useSelector(isCategoryLoadingSelector);
    const dispatch = useDispatch();
    // const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCategoriesStartAction());
    }, []);
    // const isCategoriesDataFetched = useSelector(categoriesDataFetchedSelector);
    // console.log(isCategoriesDataFetched)
      //categories
        // useEffect(()=>{ 
        //     const fetchProducts = async () =>{
        //         const categories =  await getCategoriesAndCocuments('categories');
        //         setProductsFetched(true);
        //         dispatch(setCategoriesAction(categories));
        //     }
        //     fetchProducts();

        // },[productsFetched]);
  //isCategoriesDataFetched
    return(
        // isCategoryLoading ? <Spinner>loading</Spinner>:
        (<Routes>
            <Route index element = {<CategoriesPreview />}></Route>
            <Route path = ':category' element = {<Category />}></Route>
        </Routes>)
    )
}


export default Shop;