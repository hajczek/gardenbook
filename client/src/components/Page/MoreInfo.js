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
      <NavLink to="/historia-zmian" exact={true} activeClassName="is-active">
        Historia zmian
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
        Projekt ogrodu
      </NavLink>
      <NavLink to="/znajdz-wykonawce" exact={true} activeClassName="is-active">
        Znajdź wykonawcę
      </NavLink>
    </div>
  );
};

export default MoreInfo;
