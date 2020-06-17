import React from "react";
import MoreInfo from "./../MoreInfo";

const GardensCommunity = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>Społeczność Ogrodników</h1>
        </div>
        <div className="scrollBox">
          <p>
            Dzięki wbudowanemu w aplikację portalowi społecznościowemu
            użytkownicy będą mogli w łatwy sposób wymieniać się wiedzą,
            doswiadczeniem i opiniami. Ta funkcjonalność nie jest jeszcze
            wdrożona.
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
