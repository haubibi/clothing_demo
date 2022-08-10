// import { 
//     signInWithGooglePopup, 
//     createUserDocumentFromAuth,
//     // signInWithGoogleRedirect,
//     auth
// } from "../../../utils/firebase/firebas.utils";
// import {useEffect} from 'react';
// import {getRedirectResult} from 'firebase/auth';

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

import './Authtication.styles.scss';

const Authtication = () =>{//signInWithGoogleRedirect

    // useEffect(()=>{
    //     async function fetchResponse (){
    //         return await getRedirectResult(auth);
    //     }
    //     fetchResponse().then((response)=>{
    //         // console.log(response)
    //     });
    // },[]);
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     // const userDocRef = createUserDocumentFromAuth(user);
    //   };
    
    return(
        <div className="authentication-container">
            {/* <h1>Sign In Page</h1> */}
            {/* <button onClick={logGoogleUser}>
                Sign in with google
            </button> */}
            {/* <button onClick={logGoogleRedirectUser}>
                Sign in with google redirect
            </button> */}

            <SignUpForm />
            <SignInForm />
        </div>
    );
}


export default Authtication;