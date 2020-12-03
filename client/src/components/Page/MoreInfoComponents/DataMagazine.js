import React from 'react';
import MoreInfo from './../MoreInfo';
import translate from '../../../i18n/translate';

const DataMagazine = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>{translate('btn-title-third')}</h1>
        </div>
        <div className="scrollBox">
          <p>
            <span style={{ color: 'green' }}>grdenbook </span>
            {translate('function-data-storage-text')}
          </p>
          <p className="slogan-green">{translate('create-an-acconut')}</p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default DataMagazine;
