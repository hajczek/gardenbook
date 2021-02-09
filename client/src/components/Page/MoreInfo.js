import React from 'react';
import { NavLink } from 'react-router-dom';
import translate from '../../i18n/translate';

const MoreInfo = () => {
  return (
    <div className="more-info">
      <NavLink to="/tools" exact={true} activeClassName="is-active">
        {translate('btn-title-second')}
      </NavLink>
      <NavLink to="/database" exact={true} activeClassName="is-active">
        {translate('btn-title-third')}
      </NavLink>
      <NavLink to="/project" exact={true} activeClassName="is-active">
        {translate('btn-title-fourth')}
      </NavLink>
      <NavLink to="/search" exact={true} activeClassName="is-active">
        {translate('btn-title-fifth')}
      </NavLink>
      <NavLink to="/advices" exact={true} activeClassName="is-active">
        {translate('btn-title-sixth')}
      </NavLink>
      <NavLink to="/community" exact={true} activeClassName="is-active">
        {translate('btn-title-first')}
      </NavLink>
    </div>
  );
};

export default MoreInfo;
