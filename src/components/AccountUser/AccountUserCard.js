import React from "react";
import AccountUserDataBox from "./AccountUserDataBox";
import AccountUserFunctionsBox from "./AccountUserFunctionsBox";
import Footer from "../Page/Footer";

const AccountUserCard = () => {
  return (
    <div className="contentUser">
      <AccountUserDataBox />
      <AccountUserFunctionsBox />
      <Footer />
    </div>
  );
};

export default AccountUserCard;
