import { useCallback, useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { selectCurrentuser } from "../../store/user/user.selector";
// import { UserContext } from "../../contexts/user.context";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebas.utils";
import { userSignupAction } from "../../store/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer,SignUpH2 } from './sign-up-form.styles'


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
    const dispatch = useDispatch();
    const signInCliked = useRef(false);
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentuser);

    // const currentUserErrorSecector = 
    // const  {setCurrentUser} = useContext(UserContext);

    // console.log(useContext(UserContext))

    useEffect(()=>{
        if(currentUser && signInCliked.current) {
            navigate(-1);
            signInCliked.current = false;
        }
    }, [currentUser]);
    const resetForm = ()=>{
        setFormField(defaultFormField);
    }


    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(password !== passwordConfirm) {
            alert('the passwords dont match');
        }

        try {
            await dispatch(userSignupAction(email, password, displayName));
            signInCliked.current = true;
            resetForm();
        }catch(error) {
            console.log('user sign up failed', error)
        }   
        // try {
        //     const {user} = await createAuthUserWithEmailAndPassword(email, password);
        //     // setCurrentUser(user);
        //     createUserDocumentFromAuth(user,{displayName});
        //     // console.log(currentUser)
        //     resetForm();
        // } catch(error){
        //     if(error.code === 'auth/email-already-in-use'){
        //         alert('cannot create user, email already use')
        //     }
        // }

    }
  
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>)=>{
        var { name, value } = e.target;
        // console.log(e.target.value)
        setFormField({...formField, [name]: value});
    }

    // console.log(displayName,email,password,passwordConfirm)
    return(
        <SignUpContainer>
            {/* {console.log(displayName,email,password,passwordConfirm)} */}
            <SignUpH2>Don't have an account?</SignUpH2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(event: FormEvent<HTMLFormElement>):void=>{handleSubmit(event);}}>
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
        </SignUpContainer>
    );

}


export default SignUpForm;