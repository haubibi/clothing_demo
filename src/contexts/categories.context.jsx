import { createContext, useEffect, useState } from "react";
import { getCategoriesAndCocuments } from "../utils/firebase/firebas.utils";
// import SHOP_DATA from "../shop-data/shop-data";
// import { addCollectionToFireBase } from "../utils/firebase/firebas.utils";

const CateGoriesContext = createContext({
    categoriesMap: []
});

const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap, setCategoriesMap};


    useEffect(()=>{ 
        const fetchProducts = async () =>{
            const categoriesMap =  await getCategoriesAndCocuments('categories');
            // console.log(categoriesMap)
            setCategoriesMap(categoriesMap);
        }
        fetchProducts();

    },[]);

    return (
        <CateGoriesContext.Provider value = {value}>{children}</CateGoriesContext.Provider>
    )
}


export {CateGoriesContext , CategoriesProvider};