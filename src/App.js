import { Route, Routes} from 'react-router-dom';
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/Navigation.component'
import SignIn from './components/routes/sigin-in/Sign-in.component';

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
        <Route path = 'sign-in' element = {<SignIn />} />
      </Route>
    </Routes>
    // <Home />
  );
}

export default App;
