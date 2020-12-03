import React from 'react';
import MoreInfo from './../MoreInfo';
import translate from '../../../i18n/translate';

const UsefulTools = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>{translate('btn-title-second')}</h1>
        </div>
        <div className="scrollBox">
          <p>
            <span style={{ color: 'green' }}>grdenbook </span>
            {translate('function-useful-tools-text')}
          </p>
          <p className="slogan-green">{translate('create-an-acconut')}</p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default UsefulTools;
