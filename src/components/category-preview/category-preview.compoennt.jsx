
import './category-preview.style.scss';
import ShopCard from '../product-card/product-card.component';
import {Link} from 'react-router-dom';
const CategoryPreview = ({title, category}) => {
    return (
        <div className="category-preview-container">
            <h2>
                <Link to = {`/shop/${title.toLowerCase()}`}>
                    <span className="title">{title.toLowerCase()}</span>
                </Link>
            </h2>
            <div className='preview'>
                {
                    category.filter((_, index) => index < 4).map((product) =>{
                        return <ShopCard key = {product.id} product=  {product} />;
                    })
                }
            </div>
        </div>
    )
}

export default CategoryPreview;