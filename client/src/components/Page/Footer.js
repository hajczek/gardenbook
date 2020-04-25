import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer>
      <p>
        <NavLink to="/" exact={true} activeClassName="is-active">
          gardenbook
        </NavLink>{" "}
        &copy; 2020 |{" "}
        <NavLink to="/regulamin" exact={true} activeClassName="is-active">
          Regulamin
        </NavLink>
      </p>
      <Navigation />
    </footer>
  );
};

export default Footer;
