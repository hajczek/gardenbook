import React from "react";
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
        <a href="#">Home</a>
        <a href="#">Rejestracja</a>
        <a href="#">Zaloguj</a>
      </nav>
    </header>
  );
};

export default Header;
