import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
