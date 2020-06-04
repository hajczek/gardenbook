import React from "react";
import MoreInfo from "./../MoreInfo";

const UsefulTools = () => {
  return (
    <>
      <div className="info">
        <div className="title">
          <h1>Przydatne narzędzia</h1>
        </div>
        <div className="scrollBox">
          <p>
            gardenbook oferuje swoim użytkownikom wiele przydatnych narzędzi,
            ułatwiających zarządzanie ogrodem i organizację niezbędnych prac.
            Podstawowe narzędzia to: planer prac, baza roślin i materiałów oraz
            statystyki. Planowane jest wdrożenie kolejnych: historia, plan
            ogrodu oraz wyszukiwarka wykonawców prac ogrodniczych w pobliżu.
          </p>
          <p className="slogan-green">
            Założ konto! Korzystaj z zasobów i narzędzi gardenbook'a.
          </p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default UsefulTools;
