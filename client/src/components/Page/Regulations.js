import React from 'react';
import translate from '../../i18n/translate';
import MoreInfo from './MoreInfo';

const Regulations = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>{translate('regulations-term')}</h1>
        </div>
        <div className="scrollBox">
          <p>{translate('regulations-text')}</p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default Regulations;
