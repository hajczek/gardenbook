import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import SectionToDisplay from "./common/SectionToDisplay";
import Spinner from "./components/Page/Spinner";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          <SectionToDisplay />
          <Spinner />
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
