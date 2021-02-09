import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import EditedPlantHead from './EditedPlantHead';
import addedDateFunction from '../../common/AddedDateFunction';
import DisplayErrorInfo from '../../common/DisplayErrorInfo';
import DisplayInfo from '../../common/DisplayInfo';
import { useIntl } from 'react-intl';
import translate from '../../i18n/translate';

const EditedPlant = (props) => {
  const { plants } = useContext(GlobalContext);
  const { editPlant } = useContext(GlobalContext);
  const intl = useIntl();

  const inputPlantName = useRef('');

  // Handle for actual data
  let actualPlantName;
  let actualPlantPhoto;
  let actualPlantQuant;
  let actualPlantPrice;
  let actualPlantFetilizer;
  let actualPlantFetilizerDose;
  let actualPlantFetilizerFreq;
  let actualPlantWateringFreq;

  // Get actual user data and sets for works
  {
    plants
      .filter((plant) => plant._id === props.plantid)
      .map((plant) => {
        actualPlantName = plant.plantName;
        actualPlantPhoto = plant.plantPhoto;
        actualPlantQuant = plant.plantQuant;
        actualPlantPrice = plant.plantPrice;
        actualPlantFetilizer = plant.plantFetilizer;
        actualPlantFetilizerDose = plant.plantFetilizerDose;
        actualPlantFetilizerFreq = plant.plantFetilizerFreq;
        actualPlantWateringFreq = plant.plantWateringFreq;
      });
  }

  const [plantName, setPlantName] = useState(actualPlantName);
  const [plantPhoto, setPlantPhoto] = useState(actualPlantPhoto);
  const [plantQuant, setPlantQuant] = useState(actualPlantQuant);
  const [plantPrice, setPlantPrice] = useState(actualPlantPrice);
  const [plantFetilizer, setPlantFetilizer] = useState(actualPlantFetilizer);
  const [plantFetilizerDose, setPlantFetilizerDose] = useState(
    actualPlantFetilizerDose
  );
  const [plantFetilizerFreq, setPlantFetilizerFreq] = useState(
    actualPlantFetilizerFreq
  );
  const [plantWateringFreq, setPlantWateringFreq] = useState(
    actualPlantWateringFreq
  );
  const [addedDate] = useState(addedDateFunction());
  const [errorInfo, setErrorInfo] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const saveNewData = () => {
    // Info about set new data in database
    setUserInfo(intl.formatMessage({ id: 'data-updated' }));
    // Clear info about error
    setErrorInfo('');
    window.location.reload();
  };

  function onSubmit(e) {
    const editPlantDetails = {
      _id: props.plantid,
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
    inputPlantName.current.value === ''
      ? setErrorInfo(intl.formatMessage({ id: 'fill-needed-fields-plants' }))
      : // If yes, put new plant in database
        saveNewData();

    editPlant(props.plantid, editPlantDetails);

    e.preventDefault();
  }

  return (
    <>
      <p>{translate('change-plant-data')}</p>
      <DisplayErrorInfo info={errorInfo} />
      <DisplayInfo info={userInfo} />
      <div className="contentEdit">
        <form className="edit-form" onSubmit={onSubmit}>
          <table>
            <tbody>
              <EditedPlantHead />
              <tr key={props.plantid}>
                <td>
                  <input
                    type="text"
                    id="plant-name"
                    name="plant-name"
                    value={plantName}
                    ref={inputPlantName}
                    onChange={(e) => setPlantName(e.target.value)}
                    size="15"
                  />
                </td>
                <td>
                  <img
                    src={plantPhoto}
                    id="plant-photo"
                    alt={plantName}
                    style={{ maxHeight: 100 }}
                  />
                  <br />
                  {translate('new-photo-link')}
                  <input
                    type="text"
                    name="plant-photo"
                    id="plant-photo"
                    value={plantPhoto}
                    onChange={(e) => setPlantPhoto(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="plant-quant"
                    name="plant-quant"
                    value={plantQuant}
                    min="0"
                    step="0.01"
                    onChange={(e) => setPlantQuant(e.target.value)}
                    size="3"
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="plant-price"
                    name="plant-price"
                    value={plantPrice}
                    min="0"
                    step="0.01"
                    onChange={(e) => setPlantPrice(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="plant-fetilizer"
                    name="plant-fetilizer"
                    value={plantFetilizer}
                    onChange={(e) => setPlantFetilizer(e.target.value)}
                    size="15"
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="plant-fetilizer-dose"
                    name="plant-fetilizer-dose"
                    value={plantFetilizerDose}
                    min="0"
                    step="0.01"
                    onChange={(e) => setPlantFetilizerDose(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="plant-fetilizer-freq"
                    name="plant-fetilizer-freq"
                    value={plantFetilizerFreq}
                    min="0"
                    onChange={(e) => setPlantFetilizerFreq(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    className="inputNum"
                    type="number"
                    id="plant-watering-freq"
                    name="plant-watering-freq"
                    value={plantWateringFreq}
                    min="0"
                    onChange={(e) => setPlantWateringFreq(e.target.value)}
                  />
                </td>
                <td align="center">
                  <button className="editBtn" id="changes-plants-btn">
                    {translate('save-term')}
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

export default EditedPlant;
