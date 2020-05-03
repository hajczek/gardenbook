import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderUser from "./HeaderUser";
import LeftMenuUser from "./LeftMenuUser";
import DisplayMenu from "./DisplayMenu";
import Footer from "../Page/Footer";
import AlertsCard from "../Alerts/AlertsCard";
import AccountUserCard from "../AccountUser/AccountUserCard";
import ManageWorksCard from "../ManageWorks/ManageWorksCard";
import ManageMaterialsCard from "../ManageMaterials/ManageMaterialsCard";
import ManagePlantsCard from "../ManagePlants/ManagePlantsCard";
import AddMaterialCard from "../AddMaterial/AddMaterialCard";
import AddPlantCard from "../AddPlant/AddPlantCard";
import PlanWorkCard from "../PlanWork/PlanWorkCard";
import Help from "./Help";

import EditedPlant from "./../ManagePlants/EditedPlant";
import EditedMaterial from "./../ManageMaterials/EditedMaterial";
import EditedWork from "./../ManageWorks/EditedWork";

const PageUser = () => {
  return (
    <BrowserRouter>
      <div className="userPage">
        <HeaderUser />
        <section className="userSection">
          <DisplayMenu />
          <LeftMenuUser />
          <Switch>
            <Route exact={true} path="/" component={AlertsCard} />
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
            {/* <Route exact={true} path="/edycja-pracy" component={EditedWork} /> */}
            {/* <Route
              exact={true}
              path="/edycja-rosliny"
              component={EditedPlant}
            /> */}
            <Route
              exact={true}
              path="/edycja-materialu"
              component={EditedMaterial}
            />
            <Route exact={true} path="/pomoc" component={Help} />
          </Switch>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default PageUser;
