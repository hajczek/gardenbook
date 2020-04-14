import React from "react";

const ExistedMaterialsBox = () => {
  return (
    <div id="planned-works-with-alerts-box">
      <h2>ISTNIEJĄCE MATERIAŁY</h2>
      <ol>
        <li>
          <a href="#">
            Azofoska <span className="quantity">50</span>
            <span className="unit">kg</span> &raquo;
          </a>
        </li>
        <li>
          <a href="#">
            Kora <span className="quantity">50</span> kg &raquo;
          </a>
        </li>
        <li>
          <a href="#">
            Nawóz do trawnika <span className="quantity">70</span> kg &raquo;
          </a>
        </li>
        <li id="alert">
          <a href="#">
            Oprysk na mszyce <span className="quantity">20</span> l &raquo;
          </a>
        </li>
      </ol>
    </div>
  );
};

export default ExistedMaterialsBox;
