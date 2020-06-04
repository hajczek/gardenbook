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
            Dzięki tej funkcjonalności użytkownicy gardenbook'a będą mogli w
            łatwy sposób wyszukać w pobliżu swojej lokalizacji wykonawców
            interesujących ich prac ogrodniczych. Ta funkcjonalność nie jest
            jeszcze wdrożona.
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

export default FindContractor;
