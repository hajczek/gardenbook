import React from "react";
import MoreInfo from "./../MoreInfo";

const GardensCommunity = () => {
  return (
    <>
      <div className="info">
        <div className="title">
          <h1>Społeczność Ogrodników</h1>
        </div>
        <div className="scrollBox">
          <p>
            Docelowa funkcjonalność gardenbook'a to możliwość komunikacji z
            innymi użytkownikami aplikacji - wymiana doświadczeń, możliwość
            zadawania pytań, itp. Umożliwi ją wbudowany w aplikację portal
            społcznościowy dla użytkowników gardenbook'a. Użytkownicy aplikacji
            sami zdecydują, czy będą korzystać z tej funkcjonalności. Ta
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

export default GardensCommunity;
