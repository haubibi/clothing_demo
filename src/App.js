import { Route, Routes} from 'react-router-dom';
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/Navigation.component'
import Authtication from './components/routes/authtication/Authtication.component';
import Checkout from './components/checkout/checkout.component';
import Shop from './components/shop/shop.component';




const App = () =>{ 
  return(
    <Routes>
      <Route path = '/' element = {<Navigation />}>
        <Route index element = {<Home />} />
        <Route path = 'shop' element = {<Shop />} />
        <Route path = 'auth' element = {<Authtication />} />
        <Route path = 'checkout' element = {<Checkout />} />
      </Route>
    </Routes>
    // <Home />
  );
}

export default App;
