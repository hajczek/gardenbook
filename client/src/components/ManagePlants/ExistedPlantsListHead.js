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
        <th>
          Ilość
          <br />
          [szt.]
        </th>
        <th>
          Cena jedn.
          <br />
          [zł.]
        </th>
        <th>
          Wartość
          <br />
          [zł]
        </th>
        <th>Nawóz</th>
        <th>
          Dawka
          <br />
          [ml lub gr]
        </th>
        <th colSpan="2" className="longTd">
          Częstość
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
