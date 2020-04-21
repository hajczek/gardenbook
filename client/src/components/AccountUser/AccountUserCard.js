import React from "react";
// import AccountUserDataBox from "./AccountUserDataBox";
import AccountUserDataEdit from "./AccountUserDataEdit";
import AccountUserFunctionsBox from "./AccountUserFunctionsBox";

const AccountUserCard = () => {
  return (
    <div className="contentUser">
      {/* <AccountUserDataBox /> */}
      <AccountUserFunctionsBox />
      <AccountUserDataEdit />
    </div>
  );
};

export default AccountUserCard;
