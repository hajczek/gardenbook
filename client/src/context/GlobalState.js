import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  plannedWorks: [
    {
      id: 1,
      workName: "Cięcie krzewów",
      workMaterial: {
        workMatName: "",
        workMatQuant: 0,
        workMatUnit: "",
      },
      workTerm: "2020-04-29",
      workAlert: "09:00",
      workDetails: "Wykonać do południa",
      workDone: false,
      workTime: 0,
      workValue: 0,
      addedDate: "",
    },
    {
      id: 2,
      workName: "Prace porządkowe",
      workMaterial: {
        workMatName: "",
        workMatQuant: 0,
        workMatUnit: "",
      },
      workTerm: "2020-04-18",
      workAlert: "11:00",
      workDetails: "Sprzątnąć w garażu",
      workDone: false,
      workTime: 0,
      workValue: 0,
      addedDate: "",
    },
    {
      id: 3,
      workName: "Podlewanie",
      workMaterial: {
        workMatName: "woda",
        workMatQuant: 100,
        workMatUnit: "l",
      },
      workTerm: "2020-04-17",
      workAlert: "10:00",
      workDetails: "Podlać południowe rabaty",
      workDone: true,
      workTime: 1,
      workValue: 10,
      addedDate: "",
    },
  ],
  plants: [
    {
      id: 1,
      plantName: "Brzoza",
      plantQuant: 4,
      plantPhoto:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdrzewa.nk4.netmark.pl%2Fatlas%2Fbrzoza%2Fbrzoza_brodawkowata%2Fbrzoza_brodawkowata.php&psig=AOvVaw2MBe3JsU0AMasOjAiNZTEw&ust=1587024266947000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDLzJ786egCFQAAAAAdAAAAABAD",
      plantWateringFreq: 0,
      plantFetilizer: "",
      plantFetilizerFreq: 0,
      plantFetilizerDose: 0,
      plantPrice: 0,
      addedDate: "",
    },
    {
      id: 2,
      plantName: "Floks biały",
      plantQuant: 20,
      plantPhoto:
        "https://www.futuregardens.pl/uploads/fotosik/images8/2687/7b1028f302362bcb.jpg",
      plantWateringFreq: 1,
      plantFetilizer: "azofoska",
      plantFetilizerFreq: 3,
      plantFetilizerDose: 5,
      plantPrice: 5,
      addedDate: "",
    },
    {
      id: 3,
      plantName: "Forsycja żółta",
      plantQuant: 14,
      plantPhoto: "",
      plantWateringFreq: 1,
      plantFetilizer: "azofoska",
      plantFetilizerFreq: 3,
      plantFetilizerDose: 5,
      plantPrice: 3,
      addedDate: "",
    },
  ],
  materials: [
    {
      id: 1,
      materialName: "Azofoska",
      materialPhoto: "https://azofoska.pl/uploads/AZOFOSKA_granulat_500kg.jpg",
      materialQuant: 50,
      materialUnit: "kg",
      materialPrice: 2,
      addedDate: "",
    },
    {
      id: 2,
      materialName: "Kora",
      materialPhoto: "",
      materialQuant: 50,
      materialUnit: "kg",
      materialPrice: 0.6,
      addedDate: "",
    },
    {
      id: 3,
      materialName: "Torf",
      materialPhoto: "",
      materialQuant: 100,
      materialUnit: "kg",
      materialPrice: 1.7,
      addedDate: "",
    },
    {
      id: 4,
      materialName: "Żwir",
      materialPhoto: "",
      materialQuant: 100,
      materialUnit: "kg",
      materialPrice: 0.7,
      addedDate: "",
    },
    {
      id: 5,
      materialName: "Azofoska 2",
      materialPhoto: "https://azofoska.pl/uploads/AZOFOSKA_granulat_500kg.jpg",
      materialQuant: 60,
      materialUnit: "kg",
      materialPrice: 2.5,
      addedDate: "",
    },
  ],
  userData: [
    {
      id: 1,
      userName: "Jan",
      userEmail: "jan@kowalski.pl",
      userPass: "haslo",
      userTel: "+48658888888",
      userPlace: "Milanówek",
      userLogged: true,
      accountSets: {
        workPlanner: true,
        alertTime: 1,
        gardenPlan: false,
        gardenStatistic: false,
        gardenHistory: false,
        searchWorkers: false,
      },
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Functions
  function deleteMaterial(id) {
    dispatch({
      type: "DELETE_MATERIAL",
      payload: id,
    });
  }

  function deletePlant(id) {
    dispatch({
      type: "DELETE_PLANT",
      payload: id,
    });
  }

  function deleteWork(id) {
    dispatch({
      type: "DELETE_WORK",
      payload: id,
    });
  }

  function addMaterial(material) {
    dispatch({
      type: "ADD_MATERIAL",
      payload: material,
    });
  }

  function addPlant(plant) {
    dispatch({
      type: "ADD_PLANT",
      payload: plant,
    });
  }

  function addWork(work) {
    dispatch({
      type: "ADD_WORK",
      payload: work,
    });
  }

  function editMaterial(id) {
    dispatch({
      type: "EDIT_MATERIAL",
      payload: id,
    });
  }

  function editPlant(id) {
    dispatch({
      type: "EDIT_PLANT",
      payload: id,
    });
  }

  function editWork(id) {
    dispatch({
      type: "EDIT_WORK",
      payload: id,
    });
  }

  function editUserData(id) {
    dispatch({
      type: "EDIT_USER_DATA",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        plannedWorks: state.plannedWorks,
        plants: state.plants,
        materials: state.materials,
        userData: state.userData,
        accountSets: state.accountSets,
        deleteMaterial,
        deletePlant,
        deleteWork,
        addMaterial,
        addPlant,
        addWork,
        editMaterial,
        editPlant,
        editWork,
        editUserData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
