import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLog } from "../../assets/crown.svg";
import { UserContext } from "../../context/user-context/user-context";
import {
  NavigationContainer,
  NavLink,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles.jsx";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart/cart.context";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpenCart } = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLog className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink  to="/auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>
        {isOpenCart && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
