import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import AccountUserDataBox from "./AccountUserDataBox";
import AccountUserFunctionsBox from "./AccountUserFunctionsBox";
import Footer from "../Footer";

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
