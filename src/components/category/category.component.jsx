import { useSelector } from 'react-redux'; 

import { useParams } from 'react-router-dom';
import { useContext, useEffect,useState } from 'react';
import { CateGoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component'
import { categoriesMapSelector } from '../../store/categories/categories.selector';
import { isCategoryLoadingSelector } from '../../store/categories/categories.selector'

import {CategoryContainer, Title, ProductCardsContainer}from './catagory.styles';
import Spinner from '../spinner/spinner.component';

import styled from 'styled-components';


// import './category.style.scss';
const Category = () =>{
    const { category } = useParams();
    const isCategoryLoading = useSelector(isCategoryLoadingSelector)
    const categoriesMap = useSelector(categoriesMapSelector);
    // const { categoriesMap } = useContext(CateGoriesContext);
    const [ products, setProducts] = useState(categoriesMap[category]);
    
    //可以更新当改变的时候
    useEffect(()=>{
        setProducts(categoriesMap[category]);
        // console.log(categoriesMap, category)
        // console.log(categoriesMap, category,'changed')
    },[category, categoriesMap])
    
    
    return(
        <CategoryContainer>
                <Title>{category}</Title>
                
                <ProductCardsContainer>
            {   
                    isCategoryLoading? <Spinner />:
                
                    products && products.map((product)=>{
                        return <ProductCard key = {product.id} product = {product} />
                    })
                }
                </ProductCardsContainer>
        </CategoryContainer>
        // <div className='category-cointer'>
        //     {
        //         products && products.map((product)=>{
        //             return <ProductCard key = {product.id} product = {product} />
        //         })
        //     }
        // </div>
    )
}

export default Category;