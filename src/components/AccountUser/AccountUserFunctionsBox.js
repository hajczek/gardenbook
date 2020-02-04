import React from "react";

const AccountUserFunctionsBox = () => {
  return (
    <div id="user-functions">
      <h2>Funkcje / Narzędzia</h2>
      <p>Włącz / Wyłącz wybrane funkcje / narzędzia</p>
      <p>
        Planner prac:
        <span className="edited-value" id="work_planner_option">
          wł.
        </span>
        - ustaw czas dla alertów:
        <span className="edited-value" id="alert_time_option">
          01:00:00
        </span>
      </p>
      <p>
        Plan ogrodu:
        <span className="edited-value" id="plan_garden_option">
          wł.
        </span>
      </p>
      <p>
        Statystyki:
        <span className="edited-value" id="statistic_option">
          wł.
        </span>
      </p>
      <p>
        Historia:
        <span className="edited-value" id="history_option">
          wł.
        </span>
      </p>
      <p>
        Wyszukiwarka wykonawców:
        <span className="edited-value" id="search_workers_option">
          wł.
        </span>
        - lokalizacja:
        <span className="edited-value" id="localization_option">
          Milanówek
        </span>
      </p>
    </div>
  );
};

export default AccountUserFunctionsBox;
