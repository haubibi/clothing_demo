import { useParams } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import { CateGoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component'
import './category.style.scss';
const Category = () =>{
    const { category } = useParams();
    const { categoriesMap } = useContext(CateGoriesContext);
    const [ products, setProducts] = useState(categoriesMap[category]);


    //可以更新当改变的时候
    useEffect(()=>{
        setProducts(categoriesMap[category]);
        console.log(categoriesMap, category,'changed')
    },[category, categoriesMap])

    
    return(
        <div className='category-cointer'>
            {
                products && products.map((product)=>{
                    return <ProductCard key = {product.id} product = {product} />
                })
            }
        </div>
    )
}

export default Category;