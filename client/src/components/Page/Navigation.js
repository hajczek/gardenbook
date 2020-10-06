import React from "react";
import { NavLink } from "react-router-dom";
import translate from "../../i18n/translate";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact={true} activeClassName="is-active">
        {translate("home-term")}
      </NavLink>
      <NavLink to="/zarejestruj" exact={true} activeClassName="is-active">
        {translate("register-term")}
      </NavLink>
      <NavLink to="/zaloguj" exact={true} activeClassName="is-active">
        {translate("login-term")}
      </NavLink>
    </nav>
  );
};

export default Navigation;
