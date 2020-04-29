import React from "react";
import { NavLink } from "react-router-dom";
// import SearchExistedWork from "./SearchExistedWork";
import ExistedWorksList from "./ExistedWorksList";

const ManageWorksCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <div className="top-box">
          <h2>Zarządzaj zadaniami</h2>
          {/* <SearchExistedWork /> */}
        </div>
        <NavLink
          to="/zaplanuj-prace"
          exact={true}
          activeClassName="is-active"
          id="plan-work-link"
          className="plus-link"
        >
          + Zaplanuj pracę
        </NavLink>
        <div id="search-result-for-works"></div>
        <p>
          Zmień nazwę, termin, zaznacz jako wykonaną lub usuń wybraną z
          zaplanowanych prac.
        </p>
        <ExistedWorksList />
      </div>
    </div>
  );
};

export default ManageWorksCard;
