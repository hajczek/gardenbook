import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  plannedWorks: [
    {
      id: 1,
      workName: "Cięcie krzewów",
      workMaterial: "",
      workMatQuant: 0,
      workMatUnit: "",
      workDate: "2020-05-01",
      workDetails: "Wykonać do południa",
      workDone: false,
      workTime: 0,
      workValue: 0,
    },
    {
      id: 2,
      workName: "Prace porządkowe",
      workMaterial: "",
      workMatQuant: 0,
      workMatUnit: "",
      workDate: "2020-05-02",
      workDetails: "Sprzątnąć w garażu",
      workDone: false,
      workTime: 0,
      workValue: 0,
    },
    {
      id: 3,
      workName: "Podlewanie",
      workMaterial: "woda",
      workMatQuant: 100,
      workMatUnit: "l",
      workDate: "2020-04-25",
      workDetails: "Podlać połudionwe rabaty",
      workDone: false,
      workTime: 0,
      workValue: 0,
    },
  ],
  plants: [
    {
      id: 1,
      plantName: "Brzoza",
      plantQuant: 4,
      plantPhoto:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdrzewa.nk4.netmark.pl%2Fatlas%2Fbrzoza%2Fbrzoza_brodawkowata%2Fbrzoza_brodawkowata.php&psig=AOvVaw2MBe3JsU0AMasOjAiNZTEw&ust=1587024266947000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDLzJ786egCFQAAAAAdAAAAABAD",
      plantWateringFraq: 0,
      plantFetilizer: "",
      plantFetilizerFreq: 0,
      plantFetilizerDose: 0,
      plantPrice: 0,
    },
    {
      id: 2,
      plantName: "Floks biały",
      plantQuant: 20,
      plantPhoto:
        "https://www.futuregardens.pl/uploads/fotosik/images8/2687/7b1028f302362bcb.jpg",
      plantWateringFraq: 1,
      plantFetilizer: "azofoska",
      plantFetilizerFreq: 3,
      plantFetilizerDose: 5,
      plantPrice: 5,
    },
    {
      id: 3,
      plantName: "Forsycja żółta",
      plantQuant: 14,
      plantPhoto: "",
      plantWateringFraq: 1,
      plantFetilizer: "azofoska",
      plantFetilizerFreq: 3,
      plantFetilizerDose: 5,
      plantPrice: 3,
    },
  ],
  materials: [
    {
      id: 1,
      materialName: "Azofoska",
      materialPhoto: "",
      materialQuant: 50,
      materialUnit: "kg",
      materialPrice: 2,
    },
    {
      id: 2,
      materialName: "Kora",
      materialPhoto: "",
      materialQuant: 50,
      materialUnit: "kg",
      materialPrice: 0.6,
    },
    {
      id: 3,
      materialName: "Torf",
      materialPhoto: "",
      materialQuant: 100,
      materialUnit: "kg",
      materialPrice: 1.7,
    },
  ],
  userData: [
    {
      id: 1,
      userName: "Jan",
      useEmail: "jan@kowalski.pl",
      userPass: "haslo",
      userTel: "+48658888888",
    },
  ],
  accountSets: [
    {
      workPlanner: false,
      alertTime: 1,
      gardenPlan: false,
      gardenStatistic: false,
      gardenHistory: false,
      searchWorkers: false,
      localization: "Milanówek",
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        plannedWorks: state.plannedWorks,
        plants: state.plants,
        materials: state.materials,
        userData: state.userData,
        accountSets: state.accountSets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
