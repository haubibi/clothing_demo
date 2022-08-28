// import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';
import { DirectorItemContainer, BackgroundImageContainer, Body} from './directory-item.style';
import { FC } from 'react';
interface IDirectorItemProps {
  imageUrl: string;
  title: string;
}


const DirectorItem:FC<IDirectorItemProps> = ({imageUrl, title}) => {
    const navigate = useNavigate();
    const clickImage = () =>{
      navigate(`./shop/${title}`);
    }
    return (

        <DirectorItemContainer onClick={clickImage}>
            <BackgroundImageContainer imageUrl = {imageUrl} />
            
            <Body>
                <h2>{title}</h2>
                <p>{`Shop now`}</p>
            </Body>
        </DirectorItemContainer>
        // <div className="directory-item-container" onClick={clickImage}>
        //     <div className="background-image" style = {{
        //       backgroundImage: `url(${imageUrl})`
        //     }}/>
            
        //     <div className="body">
        //         <h2>{title}</h2>
        //         <p>{`Shop now`}</p>
        //     </div>
        // </div>
      );
}
export default DirectorItem;