import React from "react";

const PlannedWorksBox = () => {
  /* Needed functionality: 
    1. display{PlannedWorksList() - display list of planned works (without these which are displays on alerts list!!!)
       On list we must have links to card ith details about planned work.
  */
  return (
    <div id="planned-works">
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
