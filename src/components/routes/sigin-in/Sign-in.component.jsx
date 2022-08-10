import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    // signInWithGoogleRedirect,
    auth
} from "../../../utils/firebase/firebas.utils";
import {useEffect} from 'react';
import {getRedirectResult} from 'firebase/auth';

import SignUpForm from "../../sign-up-form.component/sign-up-form.component";


// import { async } from "@firebase/util";

// import { signInWithGooglePopup } 
const SignIn = () =>{//signInWithGoogleRedirect

    useEffect(()=>{
        async function fetchResponse (){
            return await getRedirectResult(auth);
        }
        fetchResponse().then((response)=>{
            // console.log(response)
        });
    },[]);


    const logGoogleUser = async () => {
    //   const {user} = await signInWithGooglePopup();
    //   await createUserDocumentFromAuth(user);

      await signInWithGooglePopup().then(({user} )=>{
            createUserDocumentFromAuth(user);
      })
    };
    // const logGoogleRedirectUser = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     // const userDocRef = createUserDocumentFromAuth(user);
    //   };
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google
            </button>
            {/* <button onClick={logGoogleRedirectUser}>
                Sign in with google redirect
            </button> */}

            <SignUpForm />
        </div>
    );
}


export default SignIn;