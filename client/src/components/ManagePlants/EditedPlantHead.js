import React from "react";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";

const EditedPlantHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>Edycja rośliny</h3>
          <DisplayErrorInfo info='Uzupełnij wymagane pola.' />
        </td>
      </tr>
      <tr>
        <th className="shortTd">Id</th>
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
