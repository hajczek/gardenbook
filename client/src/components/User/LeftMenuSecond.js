import React from "react";
import { useIntl } from 'react-intl';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const LeftMenuSecond = () => {
  const intl = useIntl();

  return (
    <div id="left-menu-second">
      <NavLink
        to="/zaplanuj-prace"
        exact={true}
        activeClassName="is-active"
        id="add-work"
        className="addBtn"
        title={intl.formatMessage({ id: 'add-job' })}
      >
        <div>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
        </div>
      </NavLink>
      <NavLink
        to="/dodaj-rosline"
        exact={true}
        activeClassName="is-active"
        id="add-plant"
        className="addBtn"
        title={intl.formatMessage({ id: 'add-plant' })}
      >
        <div>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
        </div>
      </NavLink>
      <NavLink
        to="/dodaj-material"
        exact={true}
        activeClassName="is-active"
        id="add-material"
        className="addBtn"
        title={intl.formatMessage({ id: 'add-material' })}
      >
        <div>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
        </div>
      </NavLink>
    </div>
  );
};

export default LeftMenuSecond;
