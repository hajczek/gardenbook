import React from "react";
import SearchExistedWork from "./SearchExistedWork";
import ExistedWorksList from "./ExistedWorksList";

const ManageWorksCard = () => {
  return (
    <div className="contentUser">
      <div className="content">
        <h2>Zarządzaj pracami</h2>
        <SearchExistedWork />
        <span className="plus-link" id="plan-work-link">
          + Zaplanuj pracę
        </span>
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
