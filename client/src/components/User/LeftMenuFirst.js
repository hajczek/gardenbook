import React from 'react';
import { useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSpa,
  faPen,
  faCalendarAlt,
  faMap,
  faChartLine,
  faEye,
  faTimes,
  faShower,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

const LeftMenuFirst = () => {
  const intl = useIntl();

  function closeLeftMenu(e) {
    document.getElementById('left-menu').style.display = 'none';
    document.querySelector('.displayMenu').style.display = 'flex';

    e.preventDefault();
  }

  return (
    <div id="left-menu-first">
      <FontAwesomeIcon
        className="closeMenu"
        icon={faTimes}
        fixedWidth
        onClick={closeLeftMenu}
      />
      <NavLink
        to="/manage-works"
        exact={true}
        activeClassName="is-active"
        id="works"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'manage-jobs' })}
      >
        <FontAwesomeIcon icon={faCalendarAlt} fixedWidth />
      </NavLink>
      <NavLink
        to="/manage-plants"
        exact={true}
        activeClassName="is-active"
        id="plants"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'manage-plants' })}
      >
        <FontAwesomeIcon icon={faSpa} fixedWidth />
      </NavLink>
      <NavLink
        to="/manage-materials"
        exact={true}
        activeClassName="is-active"
        id="materials"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'manage-materials' })}
      >
        <FontAwesomeIcon icon={faPen} fixedWidth />
      </NavLink>
      <NavLink
        to="/plan"
        exact={true}
        activeClassName="is-active"
        id="plan"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'garden-plan' })}
      >
        <FontAwesomeIcon icon={faMap} fixedWidth />
      </NavLink>
      <NavLink
        to="/statistic"
        exact={true}
        activeClassName="is-active"
        id="statistic"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'statistic-term' })}
      >
        <FontAwesomeIcon icon={faChartLine} fixedWidth />
      </NavLink>
      <NavLink
        to="/find-contractor"
        exact={true}
        activeClassName="is-active"
        id="find-contractor"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'find-contractor' })}
      >
        <FontAwesomeIcon icon={faEye} fixedWidth />
      </NavLink>
      <NavLink
        to="/watering"
        exact={true}
        activeClassName="is-active"
        id="watering"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'watering-on' })}
      >
        <FontAwesomeIcon icon={faShower} fixedWidth />
      </NavLink>
      <NavLink
        to="/expert"
        exact={true}
        activeClassName="is-active"
        id="expert"
        className="menuLeftBtn"
        title={intl.formatMessage({ id: 'expert-advices' })}
      >
        <FontAwesomeIcon icon={faGraduationCap} fixedWidth />
      </NavLink>

      {/* <a
        id="plan"
        href="#"
        className="menuLeftBtn notActive"
        title={intl.formatMessage({ id: 'garden-plan' })}
      >
        <FontAwesomeIcon icon={faMap} fixedWidth />
      </a>
      <a
        id="statistic"
        href="#"
        className="menuLeftBtn notActive"
        title={intl.formatMessage({ id: 'statistic-term' })}
      >
        <FontAwesomeIcon icon={faChartLine} fixedWidth />
      </a>
      <a
        id="search"
        href="#"
        className="menuLeftBtn notActive"
        title={intl.formatMessage({ id: 'find-contractor' })}
      >
        <FontAwesomeIcon icon={faEye} fixedWidth />
      </a>
      <a
        id="watering"
        href="#"
        className="menuLeftBtn notActive"
        title={intl.formatMessage({ id: 'watering-on' })}
      >
        <FontAwesomeIcon icon={faShower} fixedWidth />
      </a> */}
    </div>
  );
};

export default LeftMenuFirst;
