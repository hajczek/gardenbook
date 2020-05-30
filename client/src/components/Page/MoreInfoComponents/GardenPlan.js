import React from "react";

const GardenPlan = () => {
  return (
    <div className="info">
      <div className="title">
        <h1>Plan Twojego ogrodu</h1>
      </div>
      <div className="scrollBox">
        <p>
          Funkjonalność ułatwijąca użytkownikom aplikacji zaprojektowanie ogrodu
          i/lub jego poszczególnych części. Mając do dyspozycji proste narzędzia
          do sporządzania schematycznych projektów, użytkownik będzie mógł
          zaaranżować w aplikacji kształt swojego ogrodu. Ta funkcjonalość nie
          jest jeszcze wdrożona.
        </p>
        <p className="slogan-green">
          Założ konto! Korzystaj z zasobów i narzędzi gardenbook'a.
        </p>
      </div>
    </div>
  );
};

export default GardenPlan;
