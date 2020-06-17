import React from "react";
import MoreInfo from "../MoreInfo";

const KnowledgeExchange = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>Historia zmian</h1>
        </div>
        <div className="scrollBox">
          <p>
            gardenbook umożliwia gromadzenie wprowadzanych w aplikacji zmian.
            Dzięki temu użytkownik ma wgląd w historię swoich działań. Ta
            funkcjonalność nie jest jeszcze wdrożona.
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

export default KnowledgeExchange;
