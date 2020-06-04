import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Footer = () => {
  const { users } = useContext(GlobalContext);

  let loggedUser = 0;

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
      {loggedUser === 0 ? <Navigation key="navigacja-footer" /> : <span></span>}
    </footer>
  );
};

export default Footer;
