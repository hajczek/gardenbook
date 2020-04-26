import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { GlobalProvider } from "./context/GlobalState";
import PageCard from "./components/Page/PageCard";
import PageUser from "./components/User/PageUser";
import "./App.scss";

const App = () => {
  const { userData } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          {userData.map((data) =>
            data.userLogged === false ? <PageCard /> : <PageUser />
          )}
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
