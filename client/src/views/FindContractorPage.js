import React from 'react';
import translate from '../i18n/translate';

function FindContractorPage() {
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('find-contractor')}</h2>
        <p>{translate('find-contractor-text')}</p>
      </div>
    </div>
  );
}

export default FindContractorPage;
