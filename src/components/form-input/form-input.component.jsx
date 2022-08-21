// import './form-input.styles.scss';
import {FormInputLabel, FormInputItem, Group} from './form-input.styles';
import { useRef, useEffect } from 'react';
const FormInput = ({label, inputoptions}) =>{
    
    const inputValueLength = inputoptions.value.length;
    // const inputRef = useRef(null);

    // useEffect(()=>{
    //     console.log(inputRef.current.value)
    // },[])
    // console.log(label, typeof inputValueLength,inputValueLength,inputRef.current)
    return(
        <Group>
            <FormInputItem {...inputoptions} autoComplete = "off"></FormInputItem>
            {
                label && //inputoptions.value.length
                <FormInputLabel shrink = {inputValueLength > 0? true: false}>{label}</FormInputLabel>
            }
        </Group>
    );
}

export default FormInput;



