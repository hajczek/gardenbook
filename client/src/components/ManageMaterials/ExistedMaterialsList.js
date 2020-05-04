import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ExistedMaterialsListHead from "./ExistedMaterialsListHead";
import EditedMaterial from "./EditedMaterial";
import ExistedMaterialsSummary from './ExistedMaterialsSummary';

const ExistedMaterialsList = () => {
  const { materials } = useContext(GlobalContext);
  const { deleteMaterial } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [editMaterial, setEditMaterial] = useState(false);
  const [materialId, setMaterialId] = useState();

  useEffect(() => {
    setFilteredMaterials(
      materials.filter((material) =>
        material.materialName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, materials]);

  return editMaterial === false ? (
    <>
    <p>Edytuj lub usuń wybrane materiały.</p>
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
          <ExistedMaterialsListHead />
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
                <FontAwesomeIcon
                  id="edit-material"
                  icon={faEdit}
                  // This action opens EditedMatrial component with set material data in form to edit
                  onClick={(e) => {
                    setEditMaterial(true);
                    setMaterialId(material.id);
                  }}
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
      <ExistedMaterialsSummary />
    </div>
    </>
  ) : (
    <EditedMaterial materialid={materialId} />
  );
};

export default ExistedMaterialsList;
