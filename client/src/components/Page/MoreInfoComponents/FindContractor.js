import React from "react";
import MoreInfo from "./../MoreInfo";

const FindContractor = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>Znajdź wykonawcę</h1>
        </div>
        <div className="scrollBox">
          <p>
            Funkcjonalność ta umożliwi użytkownikom gardenbook'a wyszukiwanie
            wykonawców interesujących ich prac ogrodniczych w pobliżu ich
            lokalizacji. Ta funkcjonalność nie jest jeszcze wdrożona.
          </p>
          <p className="slogan-green">
            <span>Założ konto!</span>
            <br />
            Korzystaj z zasobów i narzędzi gardenbook'a.
          </p>
        </div>
      </div>
      <MoreInfo />
    </>
  );
};

export default FindContractor;
