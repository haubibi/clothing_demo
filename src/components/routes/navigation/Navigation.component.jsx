import { Outlet,Link } from 'react-router-dom';
import { Fragment, useContext} from 'react';
import { UserContext } from '../../../contexts/user.context';
import { ReactComponent as CLogo } from '../../../assets/crown.svg';
import { signOutUser } from '../../../utils/firebase/firebas.utils';
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropDown from '../../cart-drop-down/cart-drop-down.component';
import { CartContext } from '../../../contexts/cart.context';
import './navigation.styles.scss';

const Navigation = () =>{
    const {currentUser} = useContext(UserContext);
    const {isCartClicked, cartItems, cartCount}  = useContext(CartContext);

    const signOutHandle = async() =>{
        signOutUser(); // would be null if succeed
    }
    // console.log(currentUser)
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to = "/">
                <CLogo />
            </Link>
            <div className='nav-links-container'>
                <Link className = 'nav-link' to = '/shop'>
                    SHOP
                </Link>
                {
                    currentUser? (
                        <span className='nav-link' onClick={signOutHandle}>SIGN OUT</span>
                    ): (
                    <Link className = 'nav-link' to = '/auth'>
                        SIGN IN
                    </Link>
                    )
                }
                <CartIcon quantity = {cartCount}/>
            </div>
            { isCartClicked && <CartDropDown cartItems = {cartItems} />}
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;

