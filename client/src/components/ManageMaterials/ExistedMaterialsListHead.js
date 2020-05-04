import React from "react";

const ExistedMaterialsListHead = () => {
  return (
    <>
      <tr>
        <td colSpan="6">
          <h3>Lista materiałów</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">Lp.</th>
        <th className="longTd">Nazwa</th>
        <th className="longTd">Zdjęcie</th>
        <th className="longTd">Ilość</th>
        <th>Jedn.</th>
        <th className="longTd">Cena jedn. [zł.]</th>
        <th className="longTd">Wartość [zł.]</th>
        <th>Edytuj</th>
        <th>Usuń</th>
      </tr>
    </>
  );
};

export default ExistedMaterialsListHead;
