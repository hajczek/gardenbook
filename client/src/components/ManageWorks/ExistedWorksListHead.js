import React from "react";

const ExistedWorksListHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>Lista zadań</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">Lp.</th>
        <th className="longTd">Tytuł</th>
        <th className="longTd">Termin</th>
        <th>Alarm</th>
        <th>Status</th>
        <th className="longTd">
          Czas pracy
          <br />[ il. godz.]
        </th>
        <th className="longTd">
          Wartość
          <br />
          [zł.]
        </th>
        <th className="longTd">Materiał</th>
        <th className="longTd">Uwagi</th>
        <th>Edytuj</th>
        <th>Usuń</th>
      </tr>
    </>
  );
};

export default ExistedWorksListHead;
