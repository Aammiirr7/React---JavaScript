import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Logo />
      </div>
      <div className="navbar__search">
        <SearchBar />
      </div>
      <div className="navbar__links">
        <a href="/signin" className="navbar__link">Sign In</a>
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
