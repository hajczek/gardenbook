import React from "react";
import MoreInfo from "./../MoreInfo";

const GardenPlan = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>Plan Twojego ogrodu</h1>
        </div>
        <div className="scrollBox">
          <p>
            Funkjonalność ułatwiająca użytkownikom aplikacji zaprojektowanie
            ogrodu lub jego części. gardenbook oferuje proste narzędzia do
            sporządzania schematycznych projektów. Ta funkcjonalość nie jest
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

export default GardenPlan;
