import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/gardenbook-logo.png";
import TopMenu from "./TopMenu";

const HeaderUser = () => {
  const { users } = useContext(GlobalContext);
  return (
    <header>
      <div className="logo">
        <NavLink to="/" exact={true} activeClassName="is-active">
          <img src={logo} alt="gardenbook" id="logo" />
        </NavLink>
      </div>
      {users
        .filter((user) => user.userLogged === true)
        .map((user) => (
          <>
            <span className="welcomeText" key="user-name">
              Witaj {user.userName} !
            </span>
            <TopMenu userid={user._id} />
          </>
        ))}
    </header>
  );
};

export default HeaderUser;
