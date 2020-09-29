import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';

const Provider = ({ children, locale }) => {
  return (
    <IntlProvider
      locae={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
