import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc, //instance fc
  getDoc,
  setDoc
} from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyD2qgjdxBJrCKRa1h3ifY_y_ksmT29PGOM",
    authDomain: "clothing-db-282b1.firebaseapp.com",
    projectId: "clothing-db-282b1",
    storageBucket: "clothing-db-282b1.appspot.com",
    messagingSenderId: "697062511544",
    appId: "1:697062511544:web:9c056fa23ad92f4a49b54d" 
  };



  const firebaseApp = initializeApp(firebaseConfig);
  //get the auth
  export const auth = getAuth();
  //get the firebase storage
  export const db = getFirestore();


  //instance of google provider
  const googleProvider = new GoogleAuthProvider();
  //set the type of provider
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });


  //sing in with google account and return the information obj

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);



  export const createUserDocumentFromAuth = async (userAuth, additionalInfor) => {
    //set the user doc ref
    const userDocRef = doc(db, 'users', userAuth.uid);
    //find the snapshoot
    const userSnapshoot = await getDoc(userDocRef);
    //create new data in database if not exists
    if(!userSnapshoot.exists()){
      //get the displayName, email, date
      const {displayName, email} = userAuth;
      const createAt = new Date();
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
          ...additionalInfor
        });
      } catch(error) {
          console.log("error creating the user", error.message);
      }
    }

    return userAuth;

    // const userDocRef = doc(db, 'users', userAuth.user.uid);
    // const userSnapshoot = await getDoc(userDocRef);
    // //userSnapshoot.exists() check if exist
    // console.log(userSnapshoot.exists())

    // if(!userSnapshoot.exists()){
    //   const { displayName, email} = userAuth;
    //   const createdAt = new Date();
    // }
  }


  export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

//   rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }