import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/gardenbook-logo.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="./">
          <img src={logo} alt="gardenbook" id="logo" />
        </a>
      </div>
      <nav>
        <NavLink to="/" exact={true} activeClassName="is-active">
          Home
        </NavLink>
        <NavLink to="/zarejestruj" exact={true} activeClassName="is-active">
          Zarejestruj
        </NavLink>
        <NavLink to="/zaloguj" exact={true} activeClassName="is-active">
          Zaloguj
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
