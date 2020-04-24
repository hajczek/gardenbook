import React from "react";
import AccountUserDataBox from "./AccountUserDataBox";
import AccountUserFunctionsBox from "./AccountUserFunctionsBox";
import AccountUserDataEdit from "./AccountUserDataEdit";
import AccountUserFunctionsEdit from "./AccountUserFunctionsEdit";

const AccountUserCard = () => {
  return (
    <div className="contentUser">
      {/* <AccountUserDataBox />
      <AccountUserFunctionsBox /> */}
      <AccountUserDataEdit />
      <AccountUserFunctionsEdit />
    </div>
  );
};

export default AccountUserCard;
