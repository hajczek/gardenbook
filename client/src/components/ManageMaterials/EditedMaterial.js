import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import EditedMaterialHead from "./EditedMaterialHead";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";

const EditedMaterial = (props) => {
  const { materials } = useContext(GlobalContext);
  const { editMaterial } = useContext(GlobalContext);

  // Handle for actual data
  let actualMaterialName;
  let actualMaterialPhoto;
  let actualMaterialQuant;
  let actualMaterialUnit;
  let actualMaterialPrice;

  // Get actual user data and sets for works
  {
    materials
      .filter((material) => material._id === props.materialid)
      .map((material) => {
        actualMaterialName = material.materialName;
        actualMaterialPhoto = material.materialPhoto;
        actualMaterialQuant = material.materialQuant;
        actualMaterialUnit = material.materialUnit;
        actualMaterialPrice = material.materialPrice;
      });
  }

  const [materialName, setMaterialName] = useState(actualMaterialName);
  const [materialPhoto, setMaterialPhoto] = useState(actualMaterialPhoto);
  const [materialQuant, setMaterialQuant] = useState(actualMaterialQuant);
  const [materialUnit, setMaterialUnit] = useState(actualMaterialUnit);
  const [materialPrice, setMaterialPrice] = useState(actualMaterialPrice);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const saveNewData = () => {
    // Info about set new data in database
    setUserInfo("Dane zostały zaktualizowane.");
    // Clear info about error
    setErrorInfo("");
    document.querySelector(".edit-form").style.display = "none";
  };

  function onSubmit(e) {
    const editMaterialDetails = {
      id: props.materialid,
      materialName,
      materialPhoto,
      materialQuant,
      materialUnit,
      materialPrice,
      addedDate,
    };

    // Check if input field for name or term is empty
    document.getElementById("material-name").value === ""
      ? setErrorInfo("Uzupełnij wymagane pola: nazwa materiału")
      : // If yes, put new date for material in database
        saveNewData();

    editMaterial(editMaterialDetails);
    console.log(editMaterialDetails);

    // e.preventDefault();
  }

  return (
    <>
      <p>Zmień dane wybranego materiału.</p>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <div className="contentEdit">
        <form className="edit-form" onSubmit={onSubmit}>
          <table>
            <tbody>
              <EditedMaterialHead />
              <tr key={props.materialid}>
                <td>
                  <input
                    type="string"
                    id="material-name"
                    name="material-name"
                    value={materialName}
                    onChange={(e) => setMaterialName(e.target.value)}
                    size="15"
                  />
                </td>
                <td>
                  <img
                    src={materialPhoto}
                    id="material-photo"
                    alt={materialName}
                    style={{ maxHeight: 100 }}
                  />
                  <br />
                  Wprowadź link do nowego zdjęcia
                  <input
                    type="text"
                    name="material-photo"
                    id="material-photo"
                    value={materialPhoto}
                    onChange={(e) => setMaterialPhoto(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="material-quant"
                    name="material-quant"
                    value={materialQuant}
                    onChange={(e) => setMaterialQuant(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="string"
                    id="material-unit"
                    name="material-unit"
                    value={materialUnit}
                    onChange={(e) => setMaterialUnit(e.target.value)}
                    size="10"
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="material-price"
                    name="material-price"
                    value={materialPrice}
                    onChange={(e) => setMaterialPrice(e.target.value)}
                  />
                </td>
                <td align="center">
                  <button className="editBtn" id="changes-materials-btn">
                    Zapisz
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default EditedMaterial;
