import React from 'react';
import translate from '../i18n/translate';
import { useIntl } from 'react-intl';

function ExpertPage() {
  const intl = useIntl();

  // Take a name of actual mounth
  const today = new Date();
  const getMounth = today.toLocaleString('default', { month: 'long' });

  return (
    <div className="user-content">
      <div className="user-right-box">
        <h2>{translate('expert-advices')}</h2>
        <p>{translate('expert-advices-text')}</p>
        <form>
          <label>
            <input
              type="text"
              placeholder={intl.formatMessage({ id: 'ask-expert' })}
              className="ask-input"
            />
          </label>
          <button type="button">{translate('send-term')}</button>
        </form>
        <br />
        <br />
        <h2>{translate('monthly-calendar')}</h2>
        <h4>
          {translate('actual-mounth')}:{' '}
          <span className="actual-mounth">{getMounth}</span>
        </h4>
        <br />
        <p>{translate('actual-mounth-text')}</p>
      </div>
    </div>
  );
}

export default ExpertPage;
