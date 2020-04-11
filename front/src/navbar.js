import React from "react";

import logo from "./img/bou.svg";
import user from "./img/user.svg";
import cart from "./img/cart.png";
import logout from "./img/logout.png";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{width: "100%"}}>
        <Link
          to="/"
          className="navbar-brand"
          href="/"
        ><img src={logo}/></Link>
        <div className="navbar-nav">
          <Link to="/payment">
            <img alt="Go to pay" src={cart} width="40" height="40" />
          </Link>
          {!props.user ? (
            <Link to="/login">
              <img src={user} alt="login" width="40" height="40" />
            </Link>
          ) : (
            <label
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.user.username}
            </label>
          )}
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/logout">
              <img src={logout} alt="logout" width="20" height="20" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
