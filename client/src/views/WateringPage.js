import React, { useState } from 'react';
import translate from '../i18n/translate';

function WateringPage() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('watering-on')}</h2>
        <p>{translate('watering-on-text')}</p>
        <input
          type="checkbox"
          id="wateringOnBtn"
          onChange={(event) => setIsChecked(!isChecked)}
          checked={isChecked}
        />{' '}
        {translate('watering-on-button')}
      </div>
    </div>
  );
}

export default WateringPage;
