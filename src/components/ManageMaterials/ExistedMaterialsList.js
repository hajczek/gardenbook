import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
            <th>Usuń</th>
          </tr>

          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.id}</td>
              <td>{material.materialName}</td>
              <td>
                <img
                  src={material.materialPhoto}
                  id="material-photo"
                  alt={material.materialName}
                  style={{ maxHeight: 100 }}
                />
              </td>
              <td>{material.materialQuant}</td>
              <td>{material.materialUnit}</td>
              <td>{material.materialPrice.toFixed(2)}</td>
              <td>
                {(material.materialQuant * material.materialPrice).toFixed(2)}
              </td>
              <td>
                <button onClick={() => deleteMaterial(material.id)}>
                  <FontAwesomeIcon id="delete-material" icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExistedMaterialsList;
