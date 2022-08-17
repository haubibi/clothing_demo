// import { Outlet,Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Fragment, useContext} from 'react';
import { useSelector } from 'react-redux'

import { UserContext } from '../../../contexts/user.context';
import { ReactComponent as CLogo } from '../../../assets/crown.svg';
import { signOutUser } from '../../../utils/firebase/firebas.utils';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropDown from '../../cart-drop-down/cart-drop-down.component';
import { CartContext } from '../../../contexts/cart.context';

import { selectCurrentuser } from '../../../store/user/user.selector';
import { isCartClickedSelector } from '../../../store/cart/cart.selector';

import { NavigationContainer, LogoContainer, NavLinkContainer, NavLink } from './navigation.styles.jsx'

// import './navigation.styles.scss';



const Navigation = () =>{
    const currentUser = useSelector(selectCurrentuser);
    // const cartCount = useSelector(cartCountSelector);
    // const isCartClicked = useSelector(isCartClickedSelector);
    const isCartClicked = useSelector(
        (state)=>{
            // console.log(state.cart)
            return state.cart.isCartClicked}
        );
    // console.log(isCartClicked)
    // console.log(currentUser)
    // const {currentUser} = useContext(UserContext);
    // const {isCartClicked, cartItems, cartCount}  = useContext(CartContext);
    // console.log(isCartClicked)
    const signOutHandle = async() =>{
        signOutUser(); // would be null if succeed
    }
    // console.log(currentUser)
    return(
      <Fragment>
        <NavigationContainer >
            <LogoContainer to = "/">
                <CLogo />
            </LogoContainer>
            <NavLinkContainer>
                <NavLink to = '/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser? (
                        <NavLink as="span" onClick={signOutHandle}>SIGN OUT</NavLink>
                    ): (
                    <NavLink to = '/auth'>
                        SIGN IN
                    </NavLink>
                    )
                }
                <CartIcon />
            </NavLinkContainer>
            { isCartClicked && <CartDropDown/>}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
    // return(
    //   <Fragment>
    //     <NavigationContainer >
    //         <Link className='logo-container' to = "/">
    //             <CLogo />
    //         </Link>
    //         <div className='nav-links-container'>
    //             <Link className = 'nav-link' to = '/shop'>
    //                 SHOP
    //             </Link>
    //             {
    //                 currentUser? (
    //                     <span className='nav-link' onClick={signOutHandle}>SIGN OUT</span>
    //                 ): (
    //                 <Link className = 'nav-link' to = '/auth'>
    //                     SIGN IN
    //                 </Link>
    //                 )
    //             }
    //             <CartIcon quantity = {cartCount}/>
    //         </div>
    //         { isCartClicked && <CartDropDown cartItems = {cartItems} />}
    //     </NavigationContainer>
    //     <Outlet />
    //   </Fragment>
    // )
}

export default Navigation;

