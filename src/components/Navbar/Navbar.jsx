import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import menuIcon from "../../images/menu.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className=" container navbar__container">
        <Link to="/" className="navbar__logo">
          GO
        </Link>
        <button onClick={showMenu} className="navbar__toggle">
          <img src={menuIcon} alt="" />
        </button>
        <div
          className={
            menuActive ? " navbar__menu navbar__menu--show" : "navbar__menu"
          }
        >
          <NavLink onClick={showMenu} to="/" className="navbar__menu-link ">
            Home
          </NavLink>
          <NavLink onClick={showMenu} to="/about" className="navbar__menu-link">
            About
          </NavLink>
          <NavLink onClick={showMenu} to="/blog" className="navbar__menu-link">
            Blog
          </NavLink>

          <NavLink
            onClick={showMenu}
            to="/contacts"
            className="navbar__menu-link"
          >
            Contacts
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
