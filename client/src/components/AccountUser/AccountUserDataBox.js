import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

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
          <br />
          Lokalizacja: {data.userPlace}
          <br />
          <button>
            Zmień dane <FontAwesomeIcon id="edit-plant" icon={faEdit} />
          </button>
        </p>
      ))}
    </div>
  );
};

export default AccountUserDataBox;
