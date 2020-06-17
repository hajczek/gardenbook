import React from "react";
import MoreInfo from "./../MoreInfo";

const UsefulTools = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>Przydatne narzędzia</h1>
        </div>
        <div className="scrollBox">
          <p>
            gardenbook oferuje swoim użytkownikom wiele przydatnych narzędzi
            ułatwiających zarządzanie ogrodem i organizację niezbędnych prac.
            Należą do nich: planer prac, baza roślin i materiałów oraz
            statystyki. Planowane jest wdrożenie kolejnych: historia zmian, plan
            ogrodu oraz wyszukiwarka wykonawców prac ogrodniczych świadczących
            usługi w pobliżu lokalizacji użytkownika.
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
