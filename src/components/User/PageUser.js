import React from "react";
import HeaderUser from "./HeaderUser";
import LeftMenuUser from "./LeftMenuUser";
import Footer from "../Page/Footer";
// import AlertsCard from "../Alerts/AlertsCard";
// import AccountUserCard from "../AccountUser/AccountUserCard";
// import ManageWorksCard from "../ManageWorks/ManageWorksCard";
import ManageMaterialsCard from "../ManageMaterials/ManageMaterialsCard";
// import ManagePlantsCard from "../ManagePlants/ManagePlantsCard";
// import AddMaterialCard from "../AddMaterial/AddMaterialCard";
// import AddPlantCard from "../AddPlant/AddPlantCard";
// import PlanWorkCard from "../PlanWork/PlanWorkCard";

const PageCard = () => {
  return (
    <div className="userPage">
      <HeaderUser />
      <LeftMenuUser />
      {/* <AlertsCard /> */}
      {/* <AccountUserCard /> */}
      {/* <ManageWorksCard /> */}
      <ManageMaterialsCard />
      {/* <ManagePlantsCard /> */}
      {/* <AddMaterialCard /> */}
      {/* <AddPlantCard /> */}
      {/* <PlanWorkCard /> */}
      <Footer />
    </div>
  );
};

export default PageCard;
