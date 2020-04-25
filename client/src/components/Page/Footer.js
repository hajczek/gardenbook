import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>
        <a href="./">gardenbook</a> &copy; 2020 |{" "}
        <NavLink to="/regulamin" exact={true} activeClassName="is-active">
          Regulamin
        </NavLink>
      </p>
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
    </footer>
  );
};

export default Footer;
