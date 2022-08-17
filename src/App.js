import { Route, Routes} from 'react-router-dom';
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/Navigation.component'
import Authtication from './components/routes/authtication/Authtication.component';
import Checkout from './components/checkout/checkout.component';
import Shop from './components/shop/shop.component';

import { useEffect } from 'react';
import { signOutUser, onUserAuthStateChanged, createUserDocumentFromAuth } from './utils/firebase/firebas.utils';
import { setCurrentUserAction } from './store/user/user.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


// import { getCategoriesAndCocuments } from './utils/firebase/firebas.utils';
// import { setCategoriesAction } from './store/categories/categories.action'
// import






const App = () =>{ 
    const dispatch = useDispatch();
    const navigate = useNavigate();


    //user
    useEffect(()=>{
      // signOutUser();
      const unsubscribe = onUserAuthStateChanged((user)=>{
          //set user
          if(user){
            createUserDocumentFromAuth(user);
            // navigate(-1);
          }
          dispatch(setCurrentUserAction(user));
      });

      return unsubscribe;
  },[dispatch]);


  
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
