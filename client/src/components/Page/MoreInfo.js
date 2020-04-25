import React from "react";
import { NavLink } from "react-router-dom";

const MoreInfo = () => {
  return (
    <div className="more-info">
      <div className="title">
        <NavLink
          to="/spolecznosc-ogrodnikow"
          exact={true}
          activeClassName="is-active"
        >
          Społeczność ogrodników
        </NavLink>
      </div>
      <div className="title">
        <NavLink to="/wymiana-wiedzy" exact={true} activeClassName="is-active">
          Wymiana wiedzy
        </NavLink>
      </div>
      <div className="title">
        <NavLink
          to="/przydatne-narzedzia"
          exact={true}
          activeClassName="is-active"
        >
          Przydatne narzędzia
        </NavLink>
      </div>
      <div className="title">
        <NavLink to="/magazyn-danych" exact={true} activeClassName="is-active">
          Magazyn danych
        </NavLink>
      </div>
      <div className="title">
        <NavLink
          to="/baza-firm-ogrodniczych"
          exact={true}
          activeClassName="is-active"
        >
          Baza firm ogrodniczych
        </NavLink>
      </div>
      <div className="title">
        <NavLink
          to="/znajdz-wykonawce"
          exact={true}
          activeClassName="is-active"
        >
          Znajdź wykonawcę
        </NavLink>
      </div>
    </div>
  );
};

export default MoreInfo;
