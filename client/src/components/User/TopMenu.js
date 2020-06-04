import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import CountAlerts from "../Alerts/CountAlerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faDesktop,
  faUser,
  faQuestion,
  faHistory,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const TopMenu = (props) => {
  const { editUserDetails } = useContext(GlobalContext);

  useEffect(() => {
    editUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function logout() {
    const editUser = {
      _id: props.userid,
      userLogged: false,
    };
    editUserDetails(props.userid, editUser);
  }

  return (
    <nav>
      <NavLink to="/" title="Alerty" exact={true} activeClassName="is-active">
        <CountAlerts />
        <FontAwesomeIcon icon={faBell} />
      </NavLink>
      {/* <a href="#" title="Zestawienie prac">
          <FontAwesomeIcon icon={faCheck} />
        </a> */}
      <NavLink
        to="/wall"
        title="Portal społecznościowy gardenBook"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faDesktop} />
      </NavLink>
      <NavLink
        to="/konto"
        title="Konto"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faUser} />
      </NavLink>
      <NavLink
        to="/pomoc"
        title="Pomoc"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faQuestion} />
      </NavLink>
      {/* <a href="#" title="Historia">
          <FontAwesomeIcon icon={faHistory} />
        </a> */}
      <NavLink to="/" title="Home" exact={true} onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </NavLink>
    </nav>
  );
};

export default TopMenu;
