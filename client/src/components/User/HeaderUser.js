import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/gardenbook-logo.png";
import TopMenu from "./TopMenu";

const HeaderUser = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/" exact={true} activeClassName="is-active">
          <img src={logo} alt="gardenbook" id="logo" />
        </NavLink>
      </div>
      <TopMenu />
    </header>
  );
};

export default HeaderUser;
