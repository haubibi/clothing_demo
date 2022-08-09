import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebas.utils";


// import { signInWithGooglePopup } 
const SignIn = () =>{
    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = createUserDocumentFromAuth(user);
    };
    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google
            </button>
        </div>
    );
}


export default SignIn;