import React from 'react';
import { NavLink } from 'react-router-dom';
import translate from '../../i18n/translate';
// import { useIntl } from 'react-intl';

const Navigation = () => {
  // const intl = useIntl();
  return (
    <nav>
      <NavLink to="/" exact={true} activeClassName="is-active">
        {translate('home-term')}
      </NavLink>
      <NavLink to="/register" exact={true} activeClassName="is-active">
        {translate('register-term')}
      </NavLink>
      <NavLink to="/login" exact={true} activeClassName="is-active">
        {translate('login-term')}
      </NavLink>
    </nav>
  );
};

export default Navigation;
