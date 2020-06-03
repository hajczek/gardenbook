import React from "react";
import logo from "../../assets/img/lotus.png";
import MoreInfo from "./MoreInfo";

const Info = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <img id="logo" src={logo} alt="gardenbook logo" />
          <h1>Ogrodniczy serwis społecznościowy</h1>
        </div>
        <ul>
          <li>
            <span className="important">umożliwia</span> łatwą wymianę wiedzy i
            doświadczeń
          </li>
          <li>
            <span className="important">ułatwia</span> nawiązanie kontaktów z
            innymi ogrodnikami
          </li>
          <li>
            <span className="important">udostępnia</span> narzędzia przydatne w
            zarządzaniu ogrodem
          </li>
        </ul>
        <p>Wszystko w jednym miejscu!</p>
        <p className="slogan-green">
          Założ konto! Korzystaj z zasobów i narzędzi gardenbook'a.
        </p>
      </div>
      <MoreInfo />
    </>
  );
};

export default Info;
