import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/gardenbook-logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/" exact={true} activeClassName="is-active">
          <img src={logo} alt="gardenbook" id="logo" />
        </NavLink>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
