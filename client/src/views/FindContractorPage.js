import React from 'react';
import GoogleMap from './GoogleMap';
import translate from '../i18n/translate';

const FindContractorPage = () => {
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('find-contractor')}</h2>
        <p>{translate('find-contractor-text')}</p>
        <GoogleMap />
      </div>
    </div>
  );
};

export default FindContractorPage;
