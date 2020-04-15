import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AccountUserDataBox = () => {
  const { userData } = useContext(GlobalContext);

  return (
    <div>
      <h2>Twoje dane</h2>
      {userData.map((data) => (
        <p>
          Imię: {data.userName}
          <br />
          Email/login: {data.userEmail}
          <br />
          Aktualne hasło: {data.userPass}
          <br />
          Telefon: {data.userTel}
        </p>
      ))}
      ;
    </div>
  );
};

export default AccountUserDataBox;
