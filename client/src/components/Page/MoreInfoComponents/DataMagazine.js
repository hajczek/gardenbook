import React from "react";
import MoreInfo from "./../MoreInfo";

const DataMagazine = () => {
  return (
    <>
      <div className="right-box">
        <div className="title">
          <h1>Baza Danych</h1>
        </div>
        <div className="scrollBox">
          <p>
            gardenbook oferuje swoim użytkownikom gromadzenie danych dotyczących
            ilości roślin i materiałów znajdujących się na stanie ogrodu.
            Umożliwia to łatwe zardządzanie posiadanymi zasobami.
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

export default DataMagazine;
