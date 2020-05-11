import React from "react";
import AccountUserDataBox from "./AccountUserDataBox";
// import AccountUserFunctionsBox from "./AccountUserFunctionsBox";

const AccountUserCard = () => {
  return (
    <div className="user-content">
      <AccountUserDataBox />
      {/* <AccountUserFunctionsBox /> */}
    </div>
  );
};

export default AccountUserCard;
