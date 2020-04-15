import React from "react";

const PlannedWorksWithAlertsBox = () => {
  /* Needed functionality: 
    1. displayPlannedWorksList() - display list of planned works (without these which are displays on alerts list!!!)
       On list we must have links to card with details about planned work.
  */
  return (
    <div className="existed-box">
      <ol>
        <li>
          <a href="#">Cięcie krzewów: 01-05-202 &raquo;</a>
        </li>
        <li>
          <a href="#">Prace porządkowe: 01-05-202 &raquo;</a>
        </li>
        <li>
          <a href="#">Koszenie: 29-04-202 &raquo;</a>
        </li>
        <li id="alert">
          <a href="#">Podlewanie ALERT!: 20-04-202 &raquo;</a>
        </li>
      </ol>
    </div>
  );
};

export default PlannedWorksWithAlertsBox;
