import React from "react";

const ExistedPlantsListHead = () => {
  return (
    <>
      <tr>
        <td colSpan="11">
          <h3>Lista roślin</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">Lp.</th>
        <th className="longTd">Nazwa</th>
        <th className="longTd">Zdjęcie</th>
        <th className="longTd">
          Ilość
          <br />
          [szt.]
        </th>
        <th className="longTd">
          Cena jedn.
          <br />
          [zł.]
        </th>
        <th className="longTd">
          Wartość
          <br />
          [zł]
        </th>
        <th className="longTd">Nawóz</th>
        <th className="longTd">
          Dawka
          <br />
          [ml lub gr]
        </th>
        <th colSpan="2">
          Częstotliwość
          <br /> nawożenia / podlewania
          <br />
          [na rok] / [na tydz.]
        </th>
        <th>Edytuj</th>
        <th>Usuń</th>
      </tr>
    </>
  );
};

export default ExistedPlantsListHead;
