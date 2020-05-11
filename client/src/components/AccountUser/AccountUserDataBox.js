import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AccountUserDataEdit from "./AccountUserDataEdit";

const AccountUserDataBox = (props) => {
  const { userData } = useContext(GlobalContext);
  const [editData, setEditData] = useState(false);
  const [userId, setUserId] = useState();

  return editData === false ? (
    <div className="user-right-box">
      <h2>Twoje dane:</h2>
      {userData.map((data) => (
        <>
          <p key="user-data">
            <span>Imię:</span> {data.userName}
            <br />
            <span>Email (login):</span> {data.userEmail}
            <br />
            {/* <span>Aktualne hasło:</span> {data.userPass}
          <br /> */}
            <span>Telefon:</span> {data.userTel}
            <br />
            <span>Lokalizacja:</span> {data.userPlace}
          </p>
          <h2>Twoje ustawienia aplikacji:</h2>
          <p key="user-func">
            <span>Planner prac: </span>
            {data.accountSets.workPlanner === false ? "wył." : "wł."}
            <br />
            <span>Plan ogrodu: </span>
            {data.accountSets.gardenPlan === false ? "wył." : "wł."}
            <br />
            <span>Statystyki: </span>
            {data.accountSets.gardenStatistic === false ? "wył." : "wł."}
            <br />
            <span>Historia: </span>
            {data.accountSets.gardenHistory === false ? "wył." : "wł."}
            <br />
            <span>Wyszukiwarka wykonawców: </span>
            {data.accountSets.searchWorkers === false ? "wył." : "wł."}
            <br />
          </p>
          <button
            onClick={(e) => {
              setEditData(true);
              setUserId(data.id);
            }}
          >
            <FontAwesomeIcon id="edit-plant" icon={faEdit} /> Zmień
          </button>
        </>
      ))}
    </div>
  ) : (
    <AccountUserDataEdit userid={userId} />
  );
};

export default AccountUserDataBox;
