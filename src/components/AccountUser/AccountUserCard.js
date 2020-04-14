import React from "react";
import HeaderUser from "../User/HeaderUser";
import LeftMenuUser from "../User/LeftMenuUser";
import AccountUserDataBox from "./AccountUserDataBox";
import AccountUserFunctionsBox from "./AccountUserFunctionsBox";
import Footer from "../Page/Footer";

const AccountUserCard = () => {
  return (
    <div className="contentUser">
      <HeaderUser />
      <LeftMenuUser />
      <AccountUserDataBox />
      <AccountUserFunctionsBox />
      <Footer />
    </div>
  );
};

export default AccountUserCard;
