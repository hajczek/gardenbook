import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PageCard from "./components/Page/PageCard";
// import PageUser from "./components/User/PageUser";
import UserLogin from "./components/Page/UserLogin";
import UserRegistration from "./components/Page/UserRegistration";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div className="App">
          <PageCard />
          {/* <PageUser /> */}
          <Switch>
            <Route exact={true} path="/" component={PageCard} />
            <Route exact={true} path="/zaloguj" component={UserLogin} />
            <Route
              exact={true}
              path="/zarejestruj"
              component={UserRegistration}
            />
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
