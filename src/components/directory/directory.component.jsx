import CategoryItem from "../directory-item/directory-item.component";
// import './directory.styles.scss';

import { DirectoryContainer } from './directory.styles'

const Directory = ({categories}) => {
    return (
        // <div className="directory-container">
        //   {
        //     categories.map(({title, imageUrl, id}) => {
        //        return (
        //           <CategoryItem title={title} imageUrl = {imageUrl} key = {id}/>
        //       );
        //     })
        //   }
        // </div>
        <DirectoryContainer>
          {
            categories.map(({title, imageUrl, id}) => {
               return (
                  <CategoryItem title={title} imageUrl = {imageUrl} key = {id}/>
              );
            })
          }
        </DirectoryContainer>
    );
}

export default Directory;