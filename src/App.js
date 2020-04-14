import React from "react";
import PageCard from "./components/Page/PageCard";
import PageUser from "./components/User/PageUser";
// import PlanWorkCard from "./components/PlanWork/PlanWorkCard";
// import AddMaterialCard from "./components/AddMaterial/AddMaterialCard";
// import AddPlantCard from "./components/AddPlant/AddPlantCard";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      {/* <PageCard /> */}
      <PageUser />
      {/* <PlanWorkCard /> */}
      {/* <AddMaterialCard /> */}
      {/* <AddPlantCard /> */}
    </div>
  );
};

export default App;
