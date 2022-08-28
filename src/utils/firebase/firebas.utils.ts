import { Category } from '@paypal/paypal-js';
import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User
} from 'firebase/auth';

import {
  getFirestore,
  doc, //instance fc
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore';

import { ICartItem } from '../../store/cart/cart.default';
import { ICategory } from '../../store/categories/categories.types';
import { IUserState } from '../../store/user/user.default';

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


  export interface IObjectYoAdd {
    title: string;
  }


  export const addCollectionToFireBase = async <T extends IObjectYoAdd>(
    collectionKey: string, 
    objects: T
  ):Promise<void> => {
    //创建一个collection 的引用地址
    const newCollection = collection(db, collectionKey);
    //批量写入方法
    const batch = writeBatch(db);
    console.log(typeof objects)
    //将每个object 都写入一个创建的docRef中
    Array.prototype.forEach.call(objects, (object)=>{
      //创建一个docRef
      const docRef = doc(newCollection, object.title);
      //将object写入该地址
      batch.set(docRef, object);
    });
    //提交
    await batch.commit();
    console.log('down');
  }


  export const getCategoriesAndCocuments = async (collectionKey: string):Promise<ICategory[]> => {
    
    //获得collection的引用
    const collectionRef = collection(db, collectionKey);


    //获得该collection的query实例
    const q = query(collectionRef);


    //获得所有doc
    const querySnapshot = await getDocs(q);
    //获得所有docs 数组
    const querySnapshotDocs = querySnapshot.docs

    // console.log(querySnapshotDocs[0].data())
    //获得一个新的对象
    const categories = querySnapshotDocs.map((doc)=>{
        return doc.data() as ICategory;
    });
    // = querySnapshotDocs.reduce((pre,current)=>{
    //   //获得title和items
    //   const {items, title} = current.data();
    //   // console.log(items, title)
    //   // console.log(pre, title)
    //   pre[title.toLowerCase()] = items;
    //   return pre;
    // }, {}); 
    // console.log(categories)
    return categories;
  }




  //instance of google provider
  const googleProvider = new GoogleAuthProvider();
  //set the type of provider
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });


  //sing in with google account and return the information obj

  export const signInWithGooglePopup = async() => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = async() => signInWithRedirect(auth, googleProvider);



  export interface IAdditionalInformation {
    displayName?: string;
  }

  export interface IUserData {
    createAt: Date;
    displayname: string;
    email: string;
  }

  export interface IAdditionalInfo {
    displayName?:string;
  }




  export const createUserDocumentFromAuth = async (
    userAuth: User, 
    additionalInfor?: IAdditionalInformation
  ):Promise<void | QueryDocumentSnapshot> => {
    if(!userAuth) return;
    console.log(userAuth)
    // set the user doc ref
    const userDocRef = doc(db, 'users', userAuth['uid']);

    console.log(userDocRef)
    // console.log(userDocRef)
    //find the snapshoot
    const userSnapshoot = await getDoc(userDocRef);
    // console.log(userSnapshoot)
    //create new data in database if not exists
    if(!userSnapshoot.exists()){
      //get the displayName, email, date
      const {displayName, email} = userAuth;
      const d = new Date();
      const createAt = {
        year: d.getFullYear(),
        month: d.getMonth(),
        day: d.getDate(),
        hour: d.getHours(),
        min: d.getMinutes(),
        second: d.getSeconds()
      };
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt,
          ...additionalInfor
        });
      } catch(error) {
          console.log("error creating the user", error);
      }
    }

    return userSnapshoot as QueryDocumentSnapshot;
  }


  export const createAuthUserWithEmailAndPassword = async (email: string, password: string) =>{
      if(!email || !password) return;
      return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInWithWithEmailAndPasswordMethod = async (email:string,password:string) =>{
      if(!email || !password) return;
      return await signInWithEmailAndPassword(auth, email,password)
  }

  export const signOutUser = async () => await signOut(auth);


  export const onUserAuthStateChanged = (callback: NextOrObserver<User>) =>{
      onAuthStateChanged(auth,callback);
  }

  //get the user and add this to saga
  export const getCurrentUserAuth = (): Promise<User | null> => {
      return new Promise((resolve, reject)=>{
        const unsubscribe = onAuthStateChanged(
          auth,
          (user)=> {
              resolve(user);
              unsubscribe();
          },
          reject
        )
      });
  }


//   rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if false;
//     }
//   }
// }