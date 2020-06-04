import React from "react";
import MoreInfo from "./../MoreInfo";

const DataMagazine = () => {
  return (
    <>
      <div className="info">
        <div className="title">
          <h1>Magazyn Danych</h1>
        </div>
        <div className="scrollBox">
          <p>
            gardenbook oferuje swoim użytkownikom magazynowanie danych
            dotyczących ilości roślin znajdujących się w ogrodzie oraz
            materiałów znajdujących się na stanie. Dzięki temu w łatwy sposób
            można zarządzać posiadanymi zasobami w ogrodzie - np. szybko
            ustalić, jakie elementy należy uzupełnić.
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

export default DataMagazine;
