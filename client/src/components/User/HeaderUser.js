import React, { useContext } from "react";
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
        .map((user, index) => (
          <>
            <span key={index} className="welcomeText">
              Witaj {user.userName} !
            </span>
            <TopMenu key={user.name} userid={user._id} />
          </>
        ))}
    </header>
  );
};

export default HeaderUser;
