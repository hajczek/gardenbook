import React from "react";
import HeaderUser from "./HeaderUser";
import LeftMenuUser from "./LeftMenuUser";
import Footer from "../Page/Footer";
// import AlertsCard from "../Alerts/AlertsCard";
import AccountUserCard from "../AccountUser/AccountUserCard";

const PageCard = () => {
  return (
    <div className="userPage">
      <HeaderUser />
      <LeftMenuUser />
      {/* <AlertsCard /> */}
      <AccountUserCard />
      <Footer />
    </div>
  );
};

export default PageCard;
