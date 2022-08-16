// import './form-input.styles.scss';
import {FormInputLabel, FormInputItem, Group} from './form-input.styles';
const FormInput = ({label, inputoptions}) =>{
    return(
        <Group>
            <FormInputItem {...inputoptions}></FormInputItem>
            {
                label && //inputoptions.value.length
                <FormInputLabel shrink = {inputoptions.value.length> 0? true: false}>{label}</FormInputLabel>
            }
        </Group>
    );
}

export default FormInput;



