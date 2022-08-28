// import './button.styles.jsx';
import { FC, ButtonHTMLAttributes } from 'react';

import { BaseStyleButton, GoogleSignButton, InvertedButton, ButtonSpinner } from './button.styles';

export enum BUTTON_TYPES{
    base=  'base',
    google =  'google',
    inverted=  'inverted'
};



const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseStyleButton =>{
    const buttons = {
        [BUTTON_TYPES.base]: BaseStyleButton,
        [BUTTON_TYPES.google]: GoogleSignButton,
        [BUTTON_TYPES.inverted]: InvertedButton
    }

    return buttons[buttonType];
}


// const BUTTON_TYPE_CLASSES = {
//     base: 'base',
//     google: 'google-sign-in',
//     inverted: 'inverted',
// }

// //get the button by button type

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>{
//     return({
//         [BUTTON_TYPE_CLASSES.base]: BaseStyleButton,
//         [BUTTON_TYPE_CLASSES.google]: GoogleSignButton,
//         [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
//     }[buttonType])
// };

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: BUTTON_TYPES,
    isLoading?:boolean;
}

const Button:FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
    const ButtonTag = getButton(buttonType);
    return(
        <ButtonTag 
            {...otherProps}
        >
            { isLoading? <ButtonSpinner />:  children}
        </ButtonTag>
        // <button 
        //     className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        //     {...otherProps}
        // >
        //     {children}
        // </button>
    )
}
export default Button;