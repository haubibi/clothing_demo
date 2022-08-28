// import './form-input.styles.scss';
import {FormInputLabelTag, FormInputItem, Group} from './form-input.styles';
import { useRef, useEffect } from 'react';
import { FC } from 'react';
import { IInputoptions, IFormInputPropsInterface } from '../../utils/components-interface/components-interface';




const FormInput:FC<IFormInputPropsInterface> = ({label, inputoptions}) =>{
    
    const inputValueLength = inputoptions.value.length;
    // const inputRef = useRef(null);

    // useEffect(()=>{
    //     console.log(inputRef.current.value)
    // },[])
    // console.log(label, typeof inputValueLength,inputValueLength,inputRef.current)
    return(
        <Group>
            <FormInputItem {...inputoptions}></FormInputItem>
            {
                label && //inputoptions.value.length
                <FormInputLabelTag shrink = {inputValueLength > 0? true: false}>{label}</FormInputLabelTag>
            }
        </Group>
    );
}

export default FormInput;



