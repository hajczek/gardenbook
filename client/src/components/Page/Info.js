import React from 'react';
import logo from '../../assets/img/lotus.png';
import MoreInfo from './MoreInfo';
import translate from '../../i18n/translate';

const Info = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <img id="logo" src={logo} alt="gardenbook logo" />
          <h1>{translate('portal-title')}</h1>
        </div>
        <div className="scrollBox">
          <ul>
            <li>
              <span className="important">{translate('enables-term')}</span>{' '}
              {translate('enables-text')}
            </li>
            <li>
              <span className="important">{translate('allows-term')}</span>{' '}
              {translate('allows-text')}
            </li>
            <li>
              <span className="important">{translate('provides-term')}</span>{' '}
              {translate('provides-text')}
            </li>
          </ul>
          <p className="slogan">
            {translate('all-in-one')}{' '}
            <span className="slogan-green">
              {translate('create-an-acconut')}
            </span>
          </p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default Info;
