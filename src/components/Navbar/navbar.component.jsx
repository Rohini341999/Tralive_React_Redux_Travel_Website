import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import PhoneIcon from "../../icons/phoneIcon";
import MenuIcon from "../../icons/menuIcon";
import CloseMenuIcon from "../../icons/closeMenuIcon";
import CartIcon from "../cart-icon/cart-icon.component";
// import CartActionTypes from "../../redux/cart/cart.types";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "../header.css";

const Navbar = ({ currentUser, hidden }) => (
  <div className="nav-container nav-open">
    <nav className="nav-block">
      <Link to="/">
        <Logo className="logo-img"></Logo>
      </Link>
    </nav>
    <div className="buttons-container">
      <Link className="header-nav-btn" to="/">
        Home
      </Link>
      <Link className="header-nav-btn" to="/">
        Events
      </Link>

      <Link className="header-nav-btn" to="/">
        About
      </Link>

      <Link className="header-nav-btn" to="/">
        Blog
      </Link>

      {currentUser ? (
        <div className="header-nav-btn" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="header-nav-btn" to="/signin">
          Sign In
        </Link>
      )}

      <Link to="/contact" className="header-nav-btn btn--contact">
        <PhoneIcon />
        <span className="phone-number">Contact</span>
      </Link>

      <Link className="header-nav-btn">
        <CartIcon />
      </Link>

      {/* {hidden ? null : <CartDropdown />} */}
    </div>
    {hidden ? null : <CartDropdown />}

    <button className="header-nav-btn menu-icon">
      <MenuIcon />
    </button>
    <button className="header-nav-btn close-menu-icon">
      <CloseMenuIcon />
    </button>
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navbar);
