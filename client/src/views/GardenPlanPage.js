import React from 'react';
import translate from '../i18n/translate';

function GardenPlanPage() {
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('garden-plan')}</h2>
        <p>{translate('garden-plan-text')}</p>
      </div>
    </div>
  );
}

export default GardenPlanPage;
