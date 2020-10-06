import React from "react";
import { NavLink } from "react-router-dom";
import translate from "../../i18n/translate";

const MoreInfo = () => {
  return (
    <div className="more-info">
      <NavLink
        to="/spolecznosc-ogrodnikow"
        exact={true}
        activeClassName="is-active"
      >
        {translate("btn-title-first")}
      </NavLink>
      <NavLink
        to="/przydatne-narzedzia"
        exact={true}
        activeClassName="is-active"
      >
        {translate("btn-title-second")}
      </NavLink>
      <NavLink to="/baza-danych" exact={true} activeClassName="is-active">
        {translate("btn-title-third")}
      </NavLink>
      <NavLink to="/projekt-ogrodu" exact={true} activeClassName="is-active">
        {translate("btn-title-fourth")}
      </NavLink>
      <NavLink to="/znajdz-wykonawce" exact={true} activeClassName="is-active">
        {translate("btn-title-fifth")}
      </NavLink>
      <NavLink to="/historia-zmian" exact={true} activeClassName="is-active">
        {translate("btn-title-sixth")}
      </NavLink>
    </div>
  );
};

export default MoreInfo;
