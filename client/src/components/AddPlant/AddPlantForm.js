import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import addedDateFunction from "../../common/AddedDateFunction";
import DisplayErrorInfo from "../../common/DisplayErrorInfo";
import DisplayInfo from "../../common/DisplayInfo";
import { useIntl } from "react-intl";
import translate from "../../i18n/translate";

const AddPlantForm = () => {
  const { plants, addPlant, users } = useContext(GlobalContext);
  const intl = useIntl();

  const [plantName, setPlantName] = useState("");
  const [plantQuant, setPlantQuant] = useState(0);
  const [plantPhoto, setPlantPhoto] = useState("");
  const [plantWateringFreq, setPlantWateringFreq] = useState(0);
  const [plantFetilizer, setPlantFetilizer] = useState("");
  const [plantFetilizerFreq, setPlantFetilizerFreq] = useState(0);
  const [plantPrice, setPlantPrice] = useState(0);
  const [plantFetilizerDose, setPlantFetilizerDose] = useState(0);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const addedPlant = () => {
    // Display info for user about added plant to list
    setUserInfo(intl.formatMessage({ id: "added-plant" }));
    // Clear info about error
    setErrorInfo("");
    // Clear all fields of form
    setPlantName("");
    setPlantQuant("");
    setPlantPhoto("");
    setPlantWateringFreq("");
    setPlantFetilizer("");
    setPlantFetilizerFreq("");
    setPlantPrice("");
    setPlantFetilizerDose("");
  };

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  function onSubmit(e) {
    const newPlant = {
      userId,
      plantName,
      plantQuant,
      plantPhoto,
      plantWateringFreq,
      plantFetilizer,
      plantFetilizerFreq,
      plantPrice,
      plantFetilizerDose,
      addedDate,
    };

    // Check if input field for name is empty
    plantName === ""
      ? // If no, set info about error
        setErrorInfo(intl.formatMessage({ id: "add-plant-name" }))
      : plants.some(
          (plant) =>
            (plant.plantName ===
              document.getElementById("plant-name").value) ===
            true
        )
      ? setErrorInfo(intl.formatMessage({ id: "existing-plant" }))
      : // If yes, put new plant in database
        addedPlant();

    addPlant(newPlant);

    e.preventDefault();
  }

  return (
    <>
      <span className="neededFields">{translate("fields-info")}</span>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form id="add-plant" action="" onSubmit={onSubmit}>
        <label htmlFor="plant-name">
          <span>{translate("plant-name")}*</span>
          <input
            type="text"
            name="plant-name"
            id="plant-name"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
          />
        </label>
        <label htmlFor="plant-quant">
          <span>{translate("pcs-nb")}</span>
          <input
            type="number"
            name="plant-quant"
            id="plant-quant"
            min="0"
            value={plantQuant}
            onChange={(e) => setPlantQuant(e.target.value)}
          />
        </label>
        <label htmlFor="plant-price">
          <span>{translate("plant-price")}</span>
          <input
            type="number"
            name="plant-price"
            id="plant-price"
            min="0"
            step="0.01"
            value={plantPrice}
            onChange={(e) => setPlantPrice(e.target.value)}
          />
        </label>
        <label htmlFor="plant-photo" className="labelForInputFile">
          {translate("plant-img")}
          <input
            type="text"
            name="plant-photo"
            id="plant-photo"
            value={plantPhoto}
            onChange={(e) => setPlantPhoto(e.target.value)}
          />
          {/* Dodaj zdjęcie rośliny
          <input
            type="file"
            name="plant-photo"
            id="plant-photo"
            className="inputFile"
            filename={plantPhoto}
            onChange={(e) => setPlantPhoto(e.target.value)}
            accept="image/jpeg,image/gif,image/jpg,image/png"
          />
          <span>Wybierz plik</span> */}
        </label>
        <label htmlFor="plant-fetilizer">
          <span>{translate("fertilizer-term")}</span>
          <input
            type="text"
            name="plant-fetilizer"
            id="plant-fetilizer"
            value={plantFetilizer}
            onChange={(e) => setPlantFetilizer(e.target.value)}
          />
        </label>
        <label htmlFor="plant-fetilizer-freq">
          <span>{translate("fert-freq")}</span>
          <input
            type="number"
            name="plant-fetilizer-freq"
            id="plant-fetilizer-freq"
            min="0"
            value={plantFetilizerFreq}
            onChange={(e) => setPlantFetilizerFreq(e.target.value)}
          />
        </label>
        <label htmlFor="plant-fertilizer-dose">
          <span>{translate("fert-dose")}</span>
          <input
            type="number"
            name="plant-fertilizer-dose"
            id="plant-fertilizer-dose"
            min="0"
            value={plantFetilizerDose}
            onChange={(e) => setPlantFetilizerDose(e.target.value)}
          />
        </label>
        <label htmlFor="plant-watering-freq">
          <span>{translate("water-freq")}</span>
          <input
            type="number"
            name="plant-watering-freq"
            id="plant-watering-freq"
            min="0"
            value={plantWateringFreq}
            onChange={(e) => setPlantWateringFreq(e.target.value)}
          />
        </label>

        <button id="add-plant-btn">{translate("save-term")}</button>
      </form>
    </>
  );
};

export default AddPlantForm;
