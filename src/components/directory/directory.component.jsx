import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';


const Directory = ({categories}) => {
    return (
        <div className="directory-container">
          {
            categories.map(({title, imageUrl, id}) => {
               return (
                  <CategoryItem title={title} imageUrl = {imageUrl} key = {id}/>
              );
            })
          }
    </div>
    );
}

export default Directory;