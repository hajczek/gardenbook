import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { GlobalProvider } from "./context/GlobalState";
import PageCard from "./components/Page/PageCard";
import PageUser from "./components/User/PageUser";
import "./App.scss";

const App = () => {
  const { users, getUsers } = useContext(GlobalContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          {users.some((data) =>
            data.userLogged === true ? (
              <PageUser key="PageUser" />
            ) : (
              <PageCard key="PageCard" />
            )
          )}
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
