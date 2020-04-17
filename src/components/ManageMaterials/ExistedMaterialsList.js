import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const ExistedMaterialsList = () => {
  const { materials } = useContext(GlobalContext);
  const { deleteMaterial } = useContext(GlobalContext);

  return (
    <div className="content">
      <table>
        <tbody>
          <tr>
            <td colSpan="6">
              <h3>Lista materiałów</h3>
            </td>
          </tr>
          <tr>
            <th>Lp.</th>
            <th>Nazwa</th>
            <th>Zdjęcie</th>
            <th>Ilość</th>
            <th>Jedn.</th>
            <th>Cena jedn. [zł.]</th>
            <th>Wartość [zł.]</th>
            <th>Edytuj</th>
            <th>Usuń</th>
          </tr>

          {materials.map((material) => (
            <tr key={material.id}>
              <td align="center">{material.id}</td>
              <td>{material.materialName}</td>
              <td align="center">
                <img
                  src={material.materialPhoto}
                  id="material-photo"
                  alt={material.materialName}
                  style={{ maxHeight: 100 }}
                />
              </td>
              <td align="center">{material.materialQuant}</td>
              <td align="center">{material.materialUnit}</td>
              <td align="right">{material.materialPrice.toFixed(2)}</td>
              <td align="right">
                {(material.materialQuant * material.materialPrice).toFixed(2)}
              </td>
              <td align="center">
                <FontAwesomeIcon
                  id="edit-material"
                  icon={faEdit}
                  // This must go to EditedMatrial component and set material.id to this component
                  onClick={() => console.log(material.id)}
                />
              </td>
              <td align="center">
                <FontAwesomeIcon
                  id="delete-material"
                  icon={faTrash}
                  onClick={() => deleteMaterial(material.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistedMaterialsList;
