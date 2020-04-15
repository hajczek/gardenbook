import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AccountUserFunctionsBox = () => {
  const { userData } = useContext(GlobalContext);
  return (
    <div>
      <h2>Funkcje / Narzędzia</h2>
      <p>Włącz / Wyłącz wybrane funkcje / narzędzia</p>

      {userData.map((data) => (
        <p>
          Planner prac:
          {data.accountSets.workPlanner === false ? "wył." : "wł."}
          <br />
          Czas dla alertów (od 1 do 12 godz.): {data.accountSets.alertTime}
          <br />
          Plan ogrodu: {data.accountSets.gardenPlan === false ? "wył." : "wł."}
          <br />
          Statystyki:
          {data.accountSets.gardenStatistic === false ? "wył." : "wł."}
          <br />
          Historia: {data.accountSets.gardenHistory === false ? "wył." : "wł."}
          <br />
          Wyszukiwarka wykonawców:
          {data.accountSets.searchWorkers === false ? "wył." : "wł."}
        </p>
      ))}
    </div>
  );
};

export default AccountUserFunctionsBox;
