import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import SectionToDisplay from "./common/SectionToDisplay";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          <SectionToDisplay />
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
