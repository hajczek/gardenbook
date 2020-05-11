import React from "react";

const EditedWorkHead = () => {
  return (
    <>
      <tr>
        <td colSpan="10">
          <h3>Edycja zadania</h3>
        </td>
      </tr>
      <tr>
        <th className="shortTd">Id</th>
        <th className="longTd">Tytuł</th>
        <th>Termin</th>
        <th>Alarm</th>
        <th align="center">Status</th>
        <th>
          Czas pracy
          <br />[ il. godz. ]
        </th>
        <th>
          Wartość
          <br />
          [zł.]
        </th>
        <th className="longTd">Materiał</th>
        <th>Uwagi</th>
        <th></th>
      </tr>
    </>
  );
};

export default EditedWorkHead;
