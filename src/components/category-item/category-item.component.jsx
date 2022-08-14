import './category-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({imageUrl, title}) => {
    const navigate = useNavigate();
    const clickImage = () =>{
      console.log(111)
      navigate(`./shop/${title}`);
    }
    return (
        <div className="category-container" onClick={clickImage}>
            <div className="background-image" style = {{
              backgroundImage: `url(${imageUrl})`
            }}/>
            
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>{`Shop now`}</p>
            </div>
        </div>
      );
}
export default CategoryItem;