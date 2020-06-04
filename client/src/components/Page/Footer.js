import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Footer = () => {
  const { users } = useContext(GlobalContext);

  // Handle of logged users
  let loggedUser = 0;

  // Check if user is logged and change value of loggedUser
  for (let i = 0; i < users.length; i++) {
    if (users[i].userLogged === true) {
      loggedUser += 1;
    }
  }

  return (
    <footer key="footer">
      <p key="footerText">
        <NavLink to="/" exact={true} activeClassName="is-active">
          gardenbook
        </NavLink>{" "}
        &copy; 2020 |{" "}
        <NavLink to="/regulamin" exact={true} activeClassName="is-active">
          Regulamin
        </NavLink>
      </p>
      {/* If loggedUser is equal 0 display menu in footer other wise not */}
      {loggedUser === 0 ? <Navigation key="navigacja-footer" /> : <span></span>}
    </footer>
  );
};

export default Footer;
