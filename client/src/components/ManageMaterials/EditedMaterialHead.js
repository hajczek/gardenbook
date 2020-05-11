import React from "react";

const EditedMaterialHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>Edycja materiału</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">Id</th>
        <th className="longTd">Nazwa</th>
        <th className="longTd">Zdjęcie</th>
        <th>Ilość</th>
        <th>Jedn.</th>
        <th>Cena jedn. [zł.]</th>
        <th></th>
      </tr>
    </>
  );
};

export default EditedMaterialHead;
