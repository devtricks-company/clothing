import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CrownLog} from '../../assets/crown.svg';
import './navigation.styles.scss'
const NavigationBar = () => {
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
              <Link className="nav-link" to='/signIn' >
                    SIGN-IN
              </Link>
          </div>
        </div>

        <Outlet />
      </Fragment>  
    );
  };

export default NavigationBar;  