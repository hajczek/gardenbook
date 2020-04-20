import React from "react";
import { GlobalProvider } from "./context/GlobalState";
// import PageCard from "./components/Page/PageCard";
import PageUser from "./components/User/PageUser";
import "./App.scss";

const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        {/* <PageCard /> */}
        <PageUser />
      </div>
    </GlobalProvider>
  );
};

export default App;
