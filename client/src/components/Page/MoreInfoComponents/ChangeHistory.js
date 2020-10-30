import React from 'react';
import MoreInfo from '../MoreInfo';
import translate from '../../../i18n/translate';

const ChangeHistory = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>{translate('btn-title-sixth')}</h1>
        </div>
        <div className="scrollBox">
          <p>{translate('function-history-text')}</p>
          <p className="slogan-green">{translate('create-an-acconut')}</p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default ChangeHistory;
