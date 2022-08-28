import { useContext } from "react";
import { useSelector } from 'react-redux';
// import { ProductContext } from "../../contexts/categories.context";
import { CateGoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.compoennt";

import { categoriesMapSelector, categoriesSelector } from '../../store/categories/categories.selector'

import { CatagoriesPreviewContainer } from './categories-preview.styles';
import { ICategoryMap } from "../../store/categories/categories.types";

// import './categories-preview.styles.scss';

const CategoriesPreview = () =>{
    // const {categoriesMap} = useContext(CateGoriesContext);

    const categoriesMap = useSelector(categoriesMapSelector) as ICategoryMap;
    return(
        
        <CatagoriesPreviewContainer>
            {
                Object.keys(categoriesMap).map((title)=>{
                    return <CategoryPreview key = {title} title = {title} category = {categoriesMap[title]}/>
                })
            }
        </CatagoriesPreviewContainer>
        // <div className="catagories-preview-container">
        //     {
        //         Object.keys(categoriesMap).map((title)=>{
        //             return <CategoryPreview key = {title} title = {title} category = {categoriesMap[title]}/>
        //         })
        //     }
        // </div>
    )
}


export default CategoriesPreview;