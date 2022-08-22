import { useEffect, useState, useCallback,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectCurrentuser } from "../../store/user/user.selector";
// import { UserContext } from "../../contexts/user.comtext";
import { signInWithGooglePopup,signInWithWithEmailAndPasswordMethod } from '../../utils/firebase/firebas.utils';
// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebas.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES }from "../button/button.component";
import { userSignGooglePopupAction,userSignEmailAction } from "../../store/user/user.action";
import { SignInContainer, Title, BottomContainer} from './sign-in-form.styles'

import './sign-in-form.styles.scss';

const defaultFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formField, setFormField]= useState(defaultFormField);
    const {email,password } = formField;
    const signInCliked = useRef(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentuser);


    // console.log(currentUser)
    // const {setCurrentUser} = useContext(UserContext);

    const resetForm = ()=>{
        setFormField(defaultFormField);
    }

    // const clickSignInCallback = useCallback(()=>{
    //     console.log(currentUser)
    //     if(currentUser) {
    //         navigate(-1);
    //     }
    // }, [currentUser]);
    useEffect(()=>{
        // console.log(currentUser, signInCliked.current)
        if(currentUser && signInCliked.current) {
            navigate(-1);
            signInCliked.current = false;
        }
    }, [currentUser]);

    const signInWithGoogle = async () => {
        try{
            await dispatch(userSignGooglePopupAction());
            signInCliked.current = true;
            // clickSignInCallback();
        } catch(error) {
            console.log('sign in with google failed', error);
        }
        // await signInWithGooglePopup();
        
        // const {user} = await signInWithGooglePopup();
        // await createUserDocumentFromAuth(user);
        // setCurrentUser(user);
        // console.log(currentUser)
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(userSignEmailAction(email, password));
            signInCliked.current  = true;
            // clickSignInCallback();
            resetForm();
        }catch(error) {
            console.log('sign in failed', error);
        }
        // try {
        //     // const {user} = await signInWithWithEmailAndPasswordMethod(email, password);
        //     // setCurrentUser(user);
        //     await signInWithWithEmailAndPasswordMethod(email, password);
        //     resetForm();
        // } catch(error){
        //     switch(error.code) {
        //         case 'auth/user-not-found':
        //             alert('no associateed email')
        //             break;
        //         case 'auth/wrong-password':
        //             alert('Incorrect password for emai')
        //             break;
        //         default:
        //             console.log(error);
        //     }
            
        //     console.log(error.code)
        // }
    }
  
    const handleOnChange = (e)=>{
        var { name, value } = e.target;
        // console.log(name, value)
        // console.log(e.target.value)
        setFormField({...formField, [name]: value});
    }


    return(
        <SignInContainer >
            {/* {console.log(displayName,email,password,passwordConfirm)} */}
            <Title>Already have an account?</Title>
            <span>Sign in with your email and password</span>
            <form onSubmit={(event)=>{handleSubmit(event);}}>
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
                <BottomContainer>
                    <Button type = "submit" >SIGN IN</Button>
                    <Button type = "button" onClick = { signInWithGoogle }  buttonType= { BUTTON_TYPES.google }>GOOGLE SIGN IN</Button>
                    {/* type = "button" prevent the submit */}
                </BottomContainer>
            </form>  
        </SignInContainer>
    );

}


export default SignInForm;