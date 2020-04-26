import React from "react";
import logo from "../../assets/img/gardenbook-logo.png";
import TopMenu from "./TopMenu";

const HeaderUser = () => {
  return (
    <header>
      <div className="logo">
        <a href="./">
          <img src={logo} alt="gardenbook" id="logo" />
        </a>
      </div>
      <TopMenu />
    </header>
  );
};

export default HeaderUser;
