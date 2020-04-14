import React from "react";
import HeaderUser from "./HeaderUser";
import LeftMenuUser from "./LeftMenuUser";
import Footer from "../Page/Footer";
// import AlertsCard from "../Alerts/AlertsCard";
// import AccountUserCard from "../AccountUser/AccountUserCard";
import ManageWorksCard from "../ManageWorks/ManageWorksCard";

const PageCard = () => {
  return (
    <div className="userPage">
      <HeaderUser />
      <LeftMenuUser />
      {/* <AlertsCard /> */}
      {/* <AccountUserCard /> */}
      <ManageWorksCard />
      <Footer />
    </div>
  );
};

export default PageCard;
