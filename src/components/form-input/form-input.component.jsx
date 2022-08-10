import './form-input.styles.scss';
const FormInput = ({label, inputoptions}) =>{
    return(
        <div className="group">
            <input className="form-input" {...inputoptions}></input>
            {
                label && 
                <label className = {`form-input-label ${inputoptions.value.length> 0?'shrink': ''}`}>{label}</label>
            }
        </div>
    );
}

export default FormInput;



