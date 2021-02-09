import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import CountAlerts from '../Alerts/CountAlerts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import translate from '../../i18n/translate';
import {
  faBell,
  faCheck,
  faDesktop,
  faUser,
  faQuestion,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const TopMenu = (props) => {
  const { editUserDetails } = useContext(GlobalContext);

  // useEffect(() => {
  //   editUserDetails();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  function logout() {
    const editUser = {
      _id: props.userid,
      userLogged: false,
    };
    editUserDetails(props.userid, editUser);
  }

  return (
    <nav>
      <NavLink
        to="/alerts"
        title="Alerts"
        exact={true}
        activeClassName="is-active"
      >
        <CountAlerts />
        <FontAwesomeIcon icon={faBell} />
        <span>{translate('alerts-term')}</span>
      </NavLink>
      <NavLink
        to="/posts"
        title="Posts"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faDesktop} />
        <span>{translate('table-term')}</span>
      </NavLink>
      <NavLink
        to="/account"
        title="account"
        exact={true}
        activeClassName="is-active"
      >
        <FontAwesomeIcon icon={faUser} />
        <span>{translate('account-term')}</span>
      </NavLink>
      <NavLink to="/help" title="Help" exact={true} activeClassName="is-active">
        <FontAwesomeIcon icon={faQuestion} />
        <span>{translate('help-term')}</span>
      </NavLink>
      {/* <a href="#" title="Historia">
          <FontAwesomeIcon icon={faHistory} />
        </a> */}
      <NavLink to="/" title="Wyloguj" exact={true} onClick={logout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>{translate('logout-term')}</span>
      </NavLink>
    </nav>
  );
};

export default TopMenu;
