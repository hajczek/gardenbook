import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import AccountUserFunctionsEdit from "./AccountUserFunctionsEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AccountUserFunctionsBox = (props) => {
  const { userData } = useContext(GlobalContext);
  const [editFunctionsOption, setEditFunctionsOption] = useState(false);
   const [userId, setUserId] = useState();

  return editFunctionsOption === false ? (
    <div className="user-functionality-box">
      <h2>Funkcje / Narzędzia</h2>
      <p className="text-info">Włącz / Wyłącz wybrane funkcje / narzędzia</p>

      {userData.map((data) => (
        <p key="user-func">
          Planner prac:
          <span>{data.accountSets.workPlanner === false ? "wył." : "wł."}</span>
          <br />
          Plan ogrodu:
          <span>{data.accountSets.gardenPlan === false ? "wył." : "wł."}</span>
          <br />
          Statystyki:
          <span>
            {data.accountSets.gardenStatistic === false ? "wył." : "wł."}
          </span>
          <br />
          Historia:
          <span>
            {data.accountSets.gardenHistory === false ? "wył." : "wł."}
          </span>
          <br />
          Wyszukiwarka wykonawców:
          <span>
            {data.accountSets.searchWorkers === false ? "wył." : "wł."}
          </span>
          <br />
          <button onClick={(e) => {
            setEditFunctionsOption(true);
            setUserId(data.id);
            }}>
            <FontAwesomeIcon id="edit-plant" icon={faEdit} /> Zmień ustawienia
          </button>
        </p>
      ))}
    </div>
  ) : (
    <AccountUserFunctionsEdit userid={userId}/>
  );
};

export default AccountUserFunctionsBox;
