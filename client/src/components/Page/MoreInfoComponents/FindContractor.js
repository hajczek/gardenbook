import React from 'react';
import MoreInfo from './../MoreInfo';
import translate from '../../../i18n/translate';

const FindContractor = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>{translate('btn-title-fifth')}</h1>
        </div>
        <div className="scrollBox">
          <p>{translate('function-contractors-nearby-text')}</p>
          <p className="slogan-green">{translate('create-an-acconut')}</p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default FindContractor;
