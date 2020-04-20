import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const AccountUserFunctionsBox = () => {
  const { userData } = useContext(GlobalContext);
  return (
    <div className="user-functionality-box">
      <h2>Funkcje / Narzędzia</h2>
      <p className="text-info">Włącz / Wyłącz wybrane funkcje / narzędzia</p>

      {userData.map((data) => (
        <p>
          Planner prac:
          <span>{data.accountSets.workPlanner === false ? "wył." : "wł."}</span>
          <br />
          Czas dla alertów (od 1 do 12 godz.):
          <span>{data.accountSets.alertTime}</span>
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
          <button>
            <FontAwesomeIcon id="edit-plant" icon={faEdit} /> Zmień ustawienia
          </button>
        </p>
      ))}
    </div>
  );
};

export default AccountUserFunctionsBox;
