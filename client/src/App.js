import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalContext } from "./context/GlobalState";
import { GlobalProvider } from "./context/GlobalState";
import PageCard from "./components/Page/PageCard";
import PageUser from "./components/User/PageUser";

import Info from "./components/Page/Info";
import UserLogin from "./components/Page/UserLogin";
import UserRegistration from "./components/Page/UserRegistration";
import GardensCommunity from "./components/Page/MoreInfoComponents/GardensCommunity";
import KnowledgeExchange from "./components/Page/MoreInfoComponents/KnowledgeExchange";
import UsefulTools from "./components/Page/MoreInfoComponents/UsefulTools";
import DataMagazine from "./components/Page/MoreInfoComponents/DataMagazine";
import BaseGardeningCompanies from "./components/Page/MoreInfoComponents/BaseGardeningCompanies";
import FindContractor from "./components/Page/MoreInfoComponents/FindContractor";
import Regulations from "./components/Page/Regulations";
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
      <Switch>
        <Route exact={true} path="/" component={Info} />
        <Route exact={true} path="/zaloguj" component={UserLogin} />
        <Route exact={true} path="/zarejestruj" component={UserRegistration} />
        <Route exact={true} path="/regulamin" component={Regulations} />

        <Route
          exact={true}
          path="/spolecznosc-ogrodnikow"
          component={GardensCommunity}
        />
        <Route
          exact={true}
          path="/wymiana-wiedzy"
          component={KnowledgeExchange}
        />
        <Route
          exact={true}
          path="/przydatne-narzedzia"
          component={UsefulTools}
        />
        <Route exact={true} path="/magazyn-danych" component={DataMagazine} />
        <Route
          exact={true}
          path="/baza-firm-ogrodniczych"
          component={BaseGardeningCompanies}
        />
        <Route
          exact={true}
          path="/znajdz-wykonawce"
          component={FindContractor}
        />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
