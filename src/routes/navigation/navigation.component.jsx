import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CrownLog} from '../../assets/crown.svg';
import { UserContext } from "../../context/user-context/user-context";
import './navigation.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils";
const NavigationBar = () => {
  const {currentUser} = useContext(UserContext);
  
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <div className="logo">
                    <CrownLog />
                </div>
            </Link>
          <div className="nav-links-container">
              <Link className="nav-link" to='/shop' >
                    SHOP
              </Link>
             {currentUser ? <span onClick={signOutUser}>SIGN OUT</span> : <Link className="nav-link" to='/auth'>SIGN IN</Link>}
          </div>
        </div>

        <Outlet />
      </Fragment>  
    );
  };

export default NavigationBar;  