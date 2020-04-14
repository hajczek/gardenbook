import React from "react";
import HeaderUser from "./HeaderUser";
import LeftMenuUser from "./LeftMenuUser";
import Footer from "../Page/Footer";
import AlertsCard from "../Alerts/AlertsCard";

const PageCard = () => {
  return (
    <div className="userPage">
      <HeaderUser />
      <LeftMenuUser />
      <AlertsCard />
      <Footer />
    </div>
  );
};

export default PageCard;
