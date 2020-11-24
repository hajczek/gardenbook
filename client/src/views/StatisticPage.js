import React from 'react';
import translate from '../i18n/translate';

function StatisticPage() {
  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('statistic-term')}</h2>
        <p>{translate('statistic-term-text')}</p>
      </div>
    </div>
  );
}

export default StatisticPage;
