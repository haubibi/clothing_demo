import CategoryItem from "../directory-item/directory-item.component";
// import './directory.styles.scss';

import { DirectoryContainer } from './directory.styles';
import { IDirectoryCategory } from "../../routes/home/home.component";
import { FC } from 'react';
interface IDirectoryProps {
  categories: IDirectoryCategory[]
}


const Directory:FC<IDirectoryProps> = ({categories}) => {
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