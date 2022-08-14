import { useState} from "react";
// import { UserContext } from "../../contexts/user.comtext";
import { signInWithGooglePopup,signInWithWithEmailAndPasswordMethod } from '../../utils/firebase/firebas.utils';
// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebas.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import './sign-in-form.styles.scss';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
}

const SignInForm = () => {
    const [formField, setFormField]= useState(defaultFormField);
    const {email,password } = formField;
    // const {setCurrentUser} = useContext(UserContext);

    const resetForm = ()=>{
        setFormField(defaultFormField);
    }

    const signInWithGoogle = async () => {
        signInWithGooglePopup();
        // const {user} = await signInWithGooglePopup();
        // await createUserDocumentFromAuth(user);
        // setCurrentUser(user);
        // console.log(currentUser)
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // const {user} = await signInWithWithEmailAndPasswordMethod(email, password);
            // setCurrentUser(user);
            signInWithWithEmailAndPasswordMethod(email, password);
            resetForm();
        } catch(error){
            switch(error.code) {
                case 'auth/user-not-found':
                    alert('no associateed email')
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password for emai')
                    break;
                default:
                    console.log(error);
            }
            
            console.log(error.code)
        }
    }
  
    const handleOnChange = (e)=>{
        var { name, value } = e.target;
        // console.log(e.target.value)
        setFormField({...formField, [name]: value});
    }


    return(
        <div className="sign-up-container">
            {/* {console.log(displayName,email,password,passwordConfirm)} */}
            <h2>Already have an account?</h2>
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
                <div className="buttons-container">
                    <Button type = "submit" >SIGN IN</Button>
                    <Button type = "button" onClick = { signInWithGoogle }  buttonType= "google">GOOGLE SIGN IN</Button>
                    {/* type = "button" prevent the submit */}
                </div>
            </form>  
        </div>
    );

}


export default SignInForm;