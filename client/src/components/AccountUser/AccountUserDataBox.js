import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AccountUserDataEdit from "./AccountUserDataEdit";

const AccountUserDataBox = (props) => {
  const { users, getUsers } = useContext(GlobalContext);
  const [editData, setEditData] = useState(false);
  const [userId, setUserId] = useState();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return editData === false ? (
    <div className="user-right-box">
      <h2>Twoje dane:</h2>
      {users
        .filter((user) => user.userLogged === true)
        .map((data) => (
          <>
            <p key="user-data">
              <span key={data.userName}>Imię:</span> {data.userName}
              <br />
              <span key={data.userEmail}>Email (login):</span> {data.userEmail}
              <br />
              {/* <span>Aktualne hasło:</span> {data.userPass}
          <br /> */}
              <span key={data.userTel}>Telefon:</span> {data.userTel}
              <br />
              <span key={data.userPlace}>Lokalizacja:</span> {data.userPlace}
            </p>
            <h2>Twoje ustawienia aplikacji:</h2>
            <p key="user-func">
              <span>Planner prac: </span>
              {data.accountSets.workPlanner === "" ? "wył." : "wł."}
              <br />
              <span>Plan ogrodu: </span>
              {data.accountSets.gardenPlan === "" ? "wył." : "wł."}
              <br />
              <span>Statystyki: </span>
              {data.accountSets.gardenStatistic === "" ? "wył." : "wł."}
              <br />
              <span>Historia: </span>
              {data.accountSets.gardenHistory === "" ? "wył." : "wł."}
              <br />
              <span>Wyszukiwarka wykonawców: </span>
              {data.accountSets.searchWorkers === "" ? "wył." : "wł."}
              <br />
            </p>
            <button
              onClick={(e) => {
                setEditData(true);
                setUserId(data._id);
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
