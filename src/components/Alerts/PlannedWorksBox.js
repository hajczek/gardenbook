import React from "react";

const PlannedWorksBox = () => {
  /* Needed functionality: 
    1. displayPlannedWorksList() - display list of planned works - on list we must have links to card with details about planned work.
  */
  return (
    <div className="existed-box-user">
      <h2>ZAPLANOWANE PRACE</h2>
      <ol id="planned-works-list">
        <li>
          Cięcie krzewów: <span>01-05-2020 &raquo;</span>
        </li>
        <li>
          Prace porządkowe: <span>01-05-2020 &raquo;</span>
        </li>
      </ol>
    </div>
  );
};

export default PlannedWorksBox;
