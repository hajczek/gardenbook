import React from "react";
import logo from "../../assets/img/lotus.png";

const Info = () => {
  return (
    <div className="info">
      <img src={logo} alt="gardenbook logo" />
      <h1>Ogrodniczy serwis społecznościowy</h1>
      <ul>
        <li>umożliwia łatwą wymianę wiedzy i doświadczeń</li>
        <li>ułatwia nawiązanie kontaktów z innymi ogrodnikami</li>
        <li>udostępnia narzędzia przydatne w zarządzaniu ogrodem</li>
      </ul>
      <p>Wszystko w jednym miejscu!</p>
      <p className="slogan">
        Założ konto! Korzystaj z zasobów i narzędzi gardenbook'a.
      </p>
    </div>
  );
};

export default Info;
