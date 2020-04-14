import React from "react";
//import PageCard from "./components/Page/PageCard";
import PlanWorkCard from "./components/PlanWork/PlanWorkCard";
// import AddMaterialCard from "./components/AddMaterial/AddMaterialCard";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      {/* <PageCard /> */}
      <PlanWorkCard />
      {/* <AddMaterialCard /> */}
    </div>
  );
};

export default App;
