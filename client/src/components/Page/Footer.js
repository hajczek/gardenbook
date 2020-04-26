import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Footer = () => {
  const { userData } = useContext(GlobalContext);
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
      {userData.map((data) =>
        data.userLogged === false ? <Navigation /> : null
      )}
    </footer>
  );
};

export default Footer;
