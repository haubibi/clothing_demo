import { Route, Routes} from 'react-router-dom';
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/Navigation.component'
import Authtication from './components/routes/authtication/Authtication.component';

const Shop = () => {
  return(
    <div>I'm the shop</div>
  )
};


const App = () =>{ 
  return(
    <Routes>
      <Route path = '/' element = {<Navigation />}>
        <Route index element = {<Home />} />
        <Route path = 'shop' element = {<Shop />} />
        <Route path = 'auth' element = {<Authtication />} />
      </Route>
    </Routes>
    // <Home />
  );
}

export default App;
