import React from 'react';
import translate from '../i18n/translate';

function ExpertPage() {
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('expert-advices')}</h2>
        <p>{translate('expert-advices-text')}</p>
      </div>
    </div>
  );
}

export default ExpertPage;
