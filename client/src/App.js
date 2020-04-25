import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import { GlobalProvider } from "./context/GlobalState";
import PageCard from "./components/Page/PageCard";
import PageUser from "./components/User/PageUser";
import "./App.scss";

const App = () => {
  const { userData } = useContext(GlobalContext);

  return (
    <GlobalProvider>
      <div className="App">
        {userData.map((data) =>
          data.userLogged === false ? <PageCard /> : <PageUser />
        )}
      </div>
    </GlobalProvider>
  );
};

export default App;
