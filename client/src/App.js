import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import SectionToDisplay from './common/SectionToDisplay';
import './App.scss';

import { I18nProvider, LOCALES } from './i18n';

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18nProvider locale={locale}>
      <BrowserRouter>
        <GlobalProvider>
          <div className="App">
            <div className="langButtons">
              {locale === LOCALES.POLISH ? (
                <button onClick={() => setLocale(LOCALES.ENGLISH)}>EN</button>
              ) : (
                <button onClick={() => setLocale(LOCALES.POLISH)}>PL</button>
              )}
            </div>
            <SectionToDisplay />
          </div>
        </GlobalProvider>
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
