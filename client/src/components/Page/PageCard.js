import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import Footer from "./Footer";

import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";
import GardensCommunity from "./MoreInfoComponents/GardensCommunity";
import KnowledgeExchange from "./MoreInfoComponents/KnowledgeExchange";
import UsefulTools from "./MoreInfoComponents/UsefulTools";
import DataMagazine from "./MoreInfoComponents/DataMagazine";
import BaseGardeningCompanies from "./MoreInfoComponents/BaseGardeningCompanies";
import FindContractor from "./MoreInfoComponents/FindContractor";
import Regulations from "./Regulations";
import NotFound from "./NotFound";

const PageCard = () => {
  return (
    <div className="contentPage">
      <Header />
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
        <Route component={NotFound} />
      </Switch>
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default PageCard;
