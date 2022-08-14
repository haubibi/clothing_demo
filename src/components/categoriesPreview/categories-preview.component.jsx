import { useContext } from "react";
// import { ProductContext } from "../../contexts/categories.context";
import { CateGoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.compoennt";
import './categories-preview.styles.scss';

const CategoriesPreview = () =>{
    const {categoriesMap} = useContext(CateGoriesContext);

    return(
        
        <div className="catagories-preview-container">
            {
                Object.keys(categoriesMap).map((title)=>{
                    return <CategoryPreview key = {title} title = {title} category = {categoriesMap[title]}/>
                })
            }
        </div>
    )
}


export default CategoriesPreview;