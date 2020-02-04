import React from "react";

const ExistedMaterialsBox = () => {
  return (
    <div id="planned-works-with-alerts-box">
      <h2>ISTNIEJĄCE MATERIAŁY</h2>
      <ol>
        <li>
          <a href="#">
            Azofoska <span class="quantity">50</span>{" "}
            <span class="unit">kg</span> &raquo;
          </a>
        </li>
        <li>
          <a href="#">
            Kora <span class="quantity">50</span> kg &raquo;
          </a>
        </li>
        <li>
          <a href="#">
            Nawóz do trawnika <span class="quantity">70</span> kg &raquo;
          </a>
        </li>
        <li id="alert">
          <a href="#">
            Oprysk na mszyce <span class="quantity">20</span> l &raquo;
          </a>
        </li>
      </ol>
    </div>
  );
};

export default ExistedMaterialsBox;
