
// import './category-preview.style.scss';
import ShopCard from '../product-card/product-card.component';
import {Link} from 'react-router-dom';

import { CategoryPreviewContainer,Title,Preview } from './category-preview.styles';
const CategoryPreview = ({title, category}) => {
    return (
        <CategoryPreviewContainer>
            <Title>
                <Link to = {`/shop/${title.toLowerCase()}`}>
                    <span >{title.toUpperCase()}</span>
                </Link>
            </Title>
            <Preview>
                {
                    category.filter((_, index) => index < 4).map((product) =>{
                        return <ShopCard key = {product.id} product=  {product} />;
                    })
                }
            </Preview>
        </CategoryPreviewContainer>
        // <div className="category-preview-container">
        //     <h2 className="title">
        //         <Link to = {`/shop/${title.toLowerCase()}`}>
        //             <span >{title.toUpperCase()}</span>
        //         </Link>
        //     </h2>
        //     <div className='preview'>
        //         {
        //             category.filter((_, index) => index < 4).map((product) =>{
        //                 return <ShopCard key = {product.id} product=  {product} />;
        //             })
        //         }
        //     </div>
        // </div>
    )
}

export default CategoryPreview;