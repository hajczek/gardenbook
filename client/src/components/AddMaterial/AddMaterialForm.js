import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import addedDateFunction from '../../common/AddedDateFunction';
import DisplayErrorInfo from '../../common/DisplayErrorInfo';
import DisplayInfo from '../../common/DisplayInfo';
import { useIntl } from 'react-intl';
import translate from '../../i18n/translate';

const AddMaterialForm = () => {
  const { materials, addMaterial, users } = useContext(GlobalContext);
  const intl = useIntl();

  const [materialName, setMaterialName] = useState('');
  const [materialPhoto, setMaterialPhoto] = useState('');
  const [materialQuant, setMaterialQuant] = useState(0);
  const [materialUnit, setMaterialUnit] = useState('');
  const [materialPrice, setMaterialPrice] = useState(0);
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const inputMaterialName = useRef('');

  const addedMaterial = () => {
    // Display info for user about added material to list
    setUserInfo(intl.formatMessage({ id: 'added-material' }));
    // Clear info about error
    setErrorInfo('');
    // Clear all fields of form
    setMaterialName('');
    setMaterialPhoto('');
    setMaterialQuant(0);
    setMaterialUnit('');
    setMaterialPrice(0);
  };

  let userId = users
    .filter((user) => user.userLogged === true)
    .map((user) => user._id)[0];

  function onSubmit(e) {
    const newMaterial = {
      userId,
      materialName,
      materialPhoto,
      materialQuant,
      materialUnit,
      materialPrice,
      addedDate,
    };

    // Check if input field for name is empty
    materialName === ''
      ? // If no, set info about error
        setErrorInfo(intl.formatMessage({ id: 'add-material-name' }))
      : materials.some(
          (material) =>
            material.materialName === inputMaterialName.current.value
        )
      ? setErrorInfo(intl.formatMessage({ id: 'existing-material' }))
      : // If material is not on a list it in database
        addedMaterial();

    addMaterial(newMaterial);

    e.preventDefault();
  }
  return (
    <>
      <span className="neededFields">{translate('fields-info')}</span>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <form id="add-material" action="" onSubmit={onSubmit}>
        <label htmlFor="material-name">
          <span>{translate('material-name')} *</span>
          <input
            type="text"
            name="material-name"
            id="material-name"
            ref={inputMaterialName}
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
          />
        </label>
        <label htmlFor="unit">
          <span>{translate('unit-term')}</span>
          <select
            name="material-unit"
            id="material-unit"
            value={materialUnit}
            onChange={(e) => setMaterialUnit(e.target.value)}
          >
            <option value="wybierz">
              {intl.formatMessage({ id: 'select-unit' })}
            </option>
            <option value="kg">kg</option>
            <option value="litr">
              {intl.formatMessage({ id: 'liter-term' })}
            </option>
            <option value="litr">
              {intl.formatMessage({ id: 'pcs-term' })}
            </option>
          </select>
        </label>
        <label htmlFor="material-quant">
          <span>{translate('quantity-term')}</span>
          <input
            type="number"
            name="material-quant"
            id="material-quant"
            min="0"
            value={materialQuant}
            onChange={(e) => setMaterialQuant(e.target.value)}
          />
        </label>
        <label htmlFor="material-pricer">
          <span>{translate('unit-price')}</span>
          <input
            type="number"
            name="material-price"
            id="material-price"
            min="0"
            step="0.01"
            value={materialPrice}
            onChange={(e) => setMaterialPrice(e.target.value)}
          />
        </label>
        <label htmlFor="material-photo" className="labelForInputFile">
          {translate('material-img')}
          <input
            type="text"
            name="material-photo"
            id="material-photo"
            value={materialPhoto}
            onChange={(e) => setMaterialPhoto(e.target.value)}
          />
          {/* Dodaj zdjęcie materiału
          <input
            type="file"
            name="material-photo"
            value={materialPhoto}
            className="inputFile"
            onChange={(e) => setMaterialPhoto(e.target.value)}
            accept="image/jpeg,image/gif,image/jpg,image/png"
          /> 
          <span>Wybierz plik</span> */}
        </label>
        <button id="add-material-btn">{translate('save-term')}</button>
      </form>
    </>
  );
};

export default AddMaterialForm;
