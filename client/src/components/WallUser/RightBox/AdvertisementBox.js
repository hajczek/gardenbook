import React from 'react';
import translate from '../../../i18n/translate';

function AdvertisementBox() {
  return (
    <div className="advertisement-box">
      <div className="advertisement-box-top">
        <h3>{translate('advertisement-term')}</h3>
      </div>
      <p>{translate('advertisement-text')}</p>
    </div>
  );
}

export default AdvertisementBox;
