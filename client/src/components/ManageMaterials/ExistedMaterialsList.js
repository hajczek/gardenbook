import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ExistedMaterialsListHead from "./ExistedMaterialsListHead";
import EditedMaterial from "./EditedMaterial";
import ExistedMaterialsSummary from "./ExistedMaterialsSummary";
import { useIntl } from "react-intl";
import translate from "../../i18n/translate";

const ExistedMaterialsList = (props) => {
  const { materials, getMaterials, users } = useContext(GlobalContext);
  const { deleteMaterial } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [editMaterial, setEditMaterial] = useState(false);
  const [materialId, setMaterialId] = useState();
  const intl = useIntl();

  useEffect(() => {
    getMaterials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilteredMaterials(
      materials.filter((material) =>
        material.materialName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, materials]);

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  return editMaterial === false ? (
    <>
      <p>{translate("edit-material-info")}</p>
      <div className="contentList">
        <input
          id="search-material"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder={intl.formatMessage({ id: "search-material" })}
          className="inputSearch"
        />
        <table>
          <tbody>
            <ExistedMaterialsListHead />
            {filteredMaterials
              .filter((material) => material.userId === userId)
              .map((material, index) => (
                <tr key={material._id}>
                  <td id="material-id" align="center">
                    {index + 1}
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
                    {(material.materialQuant * material.materialPrice).toFixed(
                      2
                    )}
                  </td>
                  <td align="center">
                    <FontAwesomeIcon
                      id="edit-material"
                      icon={faEdit}
                      // This action opens EditedMatrial component with set material data in form to edit
                      onClick={(e) => {
                        setEditMaterial(true);
                        setMaterialId(material._id);
                      }}
                    />
                  </td>
                  <td align="center">
                    <FontAwesomeIcon
                      id="delete-material"
                      icon={faTrash}
                      onClick={() => deleteMaterial(material._id)}
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
