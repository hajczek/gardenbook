import React from "react";

const EditedPlantHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>Edycja rośliny</h3>
        </td>
      </tr>
      <tr>
        <th>Nazwa</th>
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
        <th>Nawóz</th>
        <th>
          Dawka
          <br />
          [ml lub gr]
        </th>
        <th colSpan="2" className="longTd">
          Częstotość
          <br /> nawożenia / podlewania
          <br />
          [na rok] / [na tydz.]
        </th>
        <th></th>
      </tr>
    </>
  );
};

export default EditedPlantHead;
