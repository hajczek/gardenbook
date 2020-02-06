import React from "react";
import HeaderUser from "../UserElemCard/HeaderUser";
import LeftMenuUser from "../UserElemCard/LeftMenuUser";
import ExistedWorksList from "./ExistedWorksList";
import Footer from "../Footer";

const ManageWorksCard = () => {
  return (
    <div className="contentUser">
      <HeaderUser />
      <LeftMenuUser />
      <div className="content">
        <h2>Zarządzaj pracami</h2>
        <span className="plus-link" id="plan-work-link">
          + Zaplanuj pracę
        </span>
        <p>
          Zmień nazwę, termin, zaznacz jako wykonaną lub usuń wybraną z
          zaplanowanych prac.
        </p>
        <ExistedWorksList />
      </div>
      <Footer />
    </div>
  );
};

export default ManageWorksCard;
