import React from 'react';
import translate from '../i18n/translate';

function WateringPage() {
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('watering-on')}</h2>
        <p>{translate('watering-on-text')}</p>
      </div>
    </div>
  );
}

export default WateringPage;
