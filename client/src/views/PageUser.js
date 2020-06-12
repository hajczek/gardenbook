import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderUser from "../components/User/HeaderUser";
import LeftMenuUser from "../components/User/LeftMenuUser";
import DisplayMenu from "../components/User/DisplayMenu";
import Footer from "../components/Page/Footer";
import AlertsCard from "../components/Alerts/AlertsCard";
import AccountUserCard from "../components/AccountUser/AccountUserCard";
import ManageWorksCard from "../components/ManageWorks/ManageWorksCard";
import ManageMaterialsCard from "../components/ManageMaterials/ManageMaterialsCard";
import ManagePlantsCard from "../components/ManagePlants/ManagePlantsCard";
import AddMaterialCard from "../components/AddMaterial/AddMaterialCard";
import AddPlantCard from "../components/AddPlant/AddPlantCard";
import PlanWorkCard from "../components/PlanWork/PlanWorkCard";
import Help from "../components/User/Help";
import WallUser from "../components/WallUser/WallUserCard";

const PageUser = () => {
  return (
    <BrowserRouter>
      <div className="userPage">
        <HeaderUser />
        <section className="userSection">
          <DisplayMenu />
          <LeftMenuUser />
          <Switch>
            <Route exact={true} path="/alerty" component={AlertsCard} />
            <Route exact={true} path="/konto" component={AccountUserCard} />
            <Route
              exact={true}
              path="/zarzadzaj-pracami"
              component={ManageWorksCard}
            />
            <Route
              exact={true}
              path="/zarzadzaj-materialami"
              component={ManageMaterialsCard}
            />
            <Route
              exact={true}
              path="/zarzadzaj-roslinami"
              component={ManagePlantsCard}
            />
            <Route
              exact={true}
              path="/dodaj-material"
              component={AddMaterialCard}
            />
            <Route
              exact={true}
              path="/dodaj-rosline"
              component={AddPlantCard}
            />
            <Route
              exact={true}
              path="/zaplanuj-prace"
              component={PlanWorkCard}
            />
            <Route exact={true} path="/pomoc" component={Help} />
            <Route exact={true} path="/wall" component={WallUser} />
          </Switch>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageUser;
