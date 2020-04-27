import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

// Export id of edited material item to EditedPMaterial component
export const getMaterialId = (id) => {
  id = 2;
  return id;
};

const ExistedMaterialsList = () => {
  const { materials } = useContext(GlobalContext);
  const { deleteMaterial } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState([]);

  function countValueOfAllMaterials() {
    let valueOfAllMaterials = 0;
    for (let i = 0; i < materials.length; i++) {
      valueOfAllMaterials +=
        materials[i].materialQuant * materials[i].materialPrice;
    }
    return valueOfAllMaterials.toFixed(2);
  }

  useEffect(() => {
    setFilteredMaterials(
      materials.filter((material) =>
        material.materialName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, materials]);

  return (
    <div className="contentList">
      <input
        id="search-material"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Wyszukaj materiał po nazwie"
        className="inputSearch"
      />
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

          {filteredMaterials.map((material) => (
            <tr key={material.id}>
              <td id="material-id" align="center">
                {material.id}
              </td>
              <td id="material-name">{material.materialName}</td>
              <td align="center">
                <img
                  src={material.materialPhoto}
                  id="material-photo"
                  alt={material.materialName}
                  style={{ maxHeight: 100 }}
                />
              </td>
              <td id="material-quant" align="center">
                {material.materialQuant}
              </td>
              <td id="material-unit" align="center">
                {material.materialUnit}
              </td>
              <td align="right">{material.materialPrice.toFixed(2)}</td>
              <td align="right">
                {(material.materialQuant * material.materialPrice).toFixed(2)}
              </td>
              <td align="center">
                <NavLink
                  to="/edycja-materialu"
                  title="Edycja materiału"
                  exact={true}
                  activeClassName="is-active"
                >
                  <FontAwesomeIcon
                    id="edit-material"
                    icon={faEdit}
                    // This action must open EditedMatrial component and set materialData to this component
                    // onClick={() => console.log(material.id)}
                    onClick={(e) => getMaterialId(material.id)}
                  />
                </NavLink>
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
      <div>
        RAZEM: Il. materiałów: {materials.length}
        Wartość: {countValueOfAllMaterials()}
      </div>
    </div>
  );
};

export default ExistedMaterialsList;
