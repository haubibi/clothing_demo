import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebas.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import './sign-up-form.styles.scss';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

const SignUpForm = () => {
    const [formField, setFormField]= useState(defaultFormField);
    const {displayName, email,password,passwordConfirm } = formField;

    const resetForm = ()=>{
        setFormField(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== passwordConfirm) {
            alert('the passwords dont match');
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user,{displayName});
            
            resetForm();
        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already use')
            }
        }

    }
  
    const handleOnChange = (e)=>{
        var { name, value } = e.target;
        // console.log(e.target.value)
        setFormField({...formField, [name]: value});
    }

    console.log(displayName,email,password,passwordConfirm)

    return(
        <div className="sign-up-container">
            {/* {console.log(displayName,email,password,passwordConfirm)} */}
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(event)=>{handleSubmit(event);}}>
                <FormInput
                    label= "Display Name"
                    inputoptions = {{
                        name: "displayName",
                        type: "text",
                        onChange: handleOnChange,
                        value:displayName,
                        required: true
                    }}
                />
                <FormInput
                    label= "Email"
                    inputoptions = {{
                        name: "email",
                        type: "email",
                        onChange: handleOnChange,
                        value:email,
                        required: true
                    }}
                />
                <FormInput
                    label= "password"
                    inputoptions = {{
                        name: "password",
                        type: "password",
                        onChange: handleOnChange,
                        value:password,
                        required: true
                    }}
                />
                <FormInput
                    label= "Comfirm password"
                    inputoptions = {{
                        name: "passwordConfirm",
                        type: "password",
                        onChange: handleOnChange,
                        value:passwordConfirm,
                        required: true
                    }}
                />
                
                {/* <FormInput 
                    name = "displayName" 
                    label = {"Display Name"} 
                    type = "text" 
                    onChange={handleOnChange} 
                    value = {displayName} 
                    required
                />              
                <FormInput 
                    name = "email" 
                    label = {"Email address"} 
                    type = "email" 
                    onChange={handleOnChange} 
                    value = {email} required
                />
                <FormInput 
                    name = "password" 
                    label = {"password"} 
                    type = "password" 
                    onChange={handleOnChange} 
                    value = {password} 
                    required
                />
                <FormInput 
                    name = "passwordConfirm" 
                    label = {"comfirm password"} 
                    type = "password" 
                    onChange={handleOnChange} 
                    value = {passwordConfirm} 
                    required
                /> */}
                {/* <button type = "submit">submit</button> */}
                <Button type = "submit">SIGN Up</Button>
            </form>  
        </div>
    );

}


export default SignUpForm;