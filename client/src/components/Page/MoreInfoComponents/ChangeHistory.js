import React from "react";
import MoreInfo from "../MoreInfo";

const ChangeHistory = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>Historia zmian</h1>
        </div>
        <div className="scrollBox">
          <p>
            gardenbook umożliwi gromadzenie wprowadzanych w aplikacji zmian.
            Dzięki temu użytkownik będzie miał wgląd w historię swoich działań.
            Ta funkcjonalność nie jest jeszcze wdrożona.
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

export default ChangeHistory;
