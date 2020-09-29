import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import SectionToDisplay from './common/SectionToDisplay';
import './App.scss';

import { I18nProvider, LOCALES } from './i18n';

const App = () => {
  return (
    <I18nProvider locale={LOCALES.POLISH}>
      <BrowserRouter>
        <GlobalProvider>
          <div className="App">
            <SectionToDisplay />
          </div>
        </GlobalProvider>
      </BrowserRouter>
    </I18nProvider>
  );
};

export default App;
