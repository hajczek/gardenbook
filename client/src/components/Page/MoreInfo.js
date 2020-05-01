import React from "react";
import { NavLink } from "react-router-dom";

const MoreInfo = () => {
  return (
    <div className="more-info">
      <NavLink
        to="/spolecznosc-ogrodnikow"
        exact={true}
        activeClassName="is-active"
      >
        Społeczność ogrodników
      </NavLink>
      <NavLink to="/wymiana-wiedzy" exact={true} activeClassName="is-active">
        Wymiana wiedzy
      </NavLink>
      <NavLink
        to="/przydatne-narzedzia"
        exact={true}
        activeClassName="is-active"
      >
        Przydatne narzędzia
      </NavLink>
      <NavLink to="/magazyn-danych" exact={true} activeClassName="is-active">
        Magazyn danych
      </NavLink>
      <NavLink to="/plan-ogrodu" exact={true} activeClassName="is-active">
        Plan Twojego ogrodu
      </NavLink>
      <NavLink to="/znajdz-wykonawce" exact={true} activeClassName="is-active">
        Znajdź wykonawcę
      </NavLink>
    </div>
  );
};

export default MoreInfo;
