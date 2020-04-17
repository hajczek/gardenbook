import React from "react";
import HeaderUser from "./HeaderUser";
import LeftMenuUser from "./LeftMenuUser";
import Footer from "../Page/Footer";
// import AlertsCard from "../Alerts/AlertsCard";
// import AccountUserCard from "../AccountUser/AccountUserCard";
// import ManageWorksCard from "../ManageWorks/ManageWorksCard";
// import ManageMaterialsCard from "../ManageMaterials/ManageMaterialsCard";
// import ManagePlantsCard from "../ManagePlants/ManagePlantsCard";
// import AddMaterialCard from "../AddMaterial/AddMaterialCard";
// import AddPlantCard from "../AddPlant/AddPlantCard";
// import PlanWorkCard from "../PlanWork/PlanWorkCard";

// import EditedPlant from "./../ManagePlants/EditedPlant";
// import EditedMaterial from "./../ManageMaterials/EditedMaterial";
import EditedWork from "./../ManageWorks/EditedWork";

const PageCard = () => {
  return (
    <div className="userPage">
      <HeaderUser />
      <section className="userSection">
        <LeftMenuUser />
        {/* <AlertsCard /> */}
        {/* <AccountUserCard /> */}
        {/* <ManageWorksCard /> */}
        {/* <ManageMaterialsCard /> */}
        {/* <ManagePlantsCard /> */}
        {/* <AddMaterialCard /> */}
        {/* <AddPlantCard /> */}
        {/* <PlanWorkCard /> */}
        {/* <EditedPlant /> */}
        {/* <EditedMaterial /> */}
        <EditedWork />
      </section>
      <Footer />
    </div>
  );
};

export default PageCard;
