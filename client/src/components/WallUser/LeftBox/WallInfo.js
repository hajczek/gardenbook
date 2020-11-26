import React from 'react';
import translate from '../../../i18n/translate';

function WallInfo() {
  return (
    <div>
      <h3>{translate('table-term')}</h3>
      <p>{translate('table-term-info')}</p>
    </div>
  );
}

export default WallInfo;
