import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AccountUserDataBox = () => {
  const { userData } = useContext(GlobalContext);

  return (
    <div className="user-data-box">
      <h2>Twoje dane</h2>
      {userData.map((data) => (
        <p key="user-data">
          <span>Imię:</span> {data.userName}
          <br />
          <span>Email/login:</span> {data.userEmail}
          <br />
          <span>Aktualne hasło:</span> {data.userPass}
          <br />
          <span>Telefon:</span> {data.userTel}
          <br />
          <span>Lokalizacja:</span> {data.userPlace}
          <br />
          <button>
            <FontAwesomeIcon id="edit-plant" icon={faEdit} /> Edytuj dane
          </button>
        </p>
      ))}
    </div>
  );
};

export default AccountUserDataBox;
