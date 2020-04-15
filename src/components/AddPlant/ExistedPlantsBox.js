import React from "react";

const ExistedPlantsBox = () => {
  /* Needed functionality: 
    1. displayExistedPlantsList() - display list of existed plants - on list we must have links to card with details about these plants.
  */
  return (
    <div className="existed-box">
      <h2>ISTNIEJĄCE ROŚLINY</h2>
      <ol>
        <li>
          <a href="#">
            Brzoza <span className="quantity">4</span> szt. &raquo;
          </a>
        </li>
        <li>
          <a href="#">
            Dąb <span className="quantity">5</span> szt. &raquo;
          </a>
        </li>
        <li>
          <a href="#">
            Dereń <span className="quantity">1</span> szt. &raquo;
          </a>
        </li>
        <li id="alert">
          <a href="#">
            Brzoza <span className="quantity">4</span> szt. &raquo;
          </a>
        </li>
      </ol>
    </div>
  );
};

export default ExistedPlantsBox;
