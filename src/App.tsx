import { Route, Routes} from 'react-router-dom';
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/Navigation.component'
import Authtication from './routes/authtication/Authtication.component';
import Checkout from './routes/checkout/checkout.component';
import Shop from './routes/shop/shop.component';

import * as React from 'react';
import { useEffect } from 'react';
// import { signOutUser, onUserAuthStateChanged, createUserDocumentFromAuth, getCurrentUserAuth } from './utils/firebase/firebas.utils';
import { setCurrentUserAction, checkAuthentificationAsync } from './store/user/user.action';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { persistor } from './store/store';

// import { getCategoriesAndCocuments } from './utils/firebase/firebas.utils';
// import { setCategoriesAction } from './store/categories/categories.action'
// import






const App = () =>{ 
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    useEffect(()=>{
      dispatch(checkAuthentificationAsync())
    });

    console.log(process.env)
    //user
  //   useEffect(()=>{
  //     // signOutUser();
  //     const unsubscribe = onUserAuthStateChanged((user)=>{
  //         //set user
  //         if(user){
  //           createUserDocumentFromAuth(user);
  //           // navigate(-1);
  //         }
  //         dispatch(setCurrentUserAction(user)); // solve the serializable problem
  //     });

  //     return unsubscribe;
  // },[dispatch]);


    // useEffect(()=>{
    //   // dispatch()
    //   // getCurrentUser().then(user =>{
    //   //   console.log(user)
    //   // });
    // });
  

  //navigate will cause a problem
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   signOutUser();
  //   const unsubscribe = onUserAuthStateChanged((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }

  //     dispatch(setCurrentUserAction(user));
  //   });

  //   return unsubscribe;
  // }, [dispatch]);

  return(
    <Routes>
      <Route path = '/' element = {<Navigation />}>
        <Route index element = {<Home />} />
        <Route path = 'shop/*' element = {<Shop />} />
        <Route path = 'auth' element = {<Authtication />} />
        <Route path = 'checkout' element = {<Checkout />} />
      </Route>
    </Routes>
    // <Home />
  );
}

export default App;
