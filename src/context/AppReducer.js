export default (state, action) => {
  switch (action.type) {
    case "DELETE_MATERIAL":
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material.id !== action.payload
        ),
      };
    case "DELETE_PLANT":
      return {
        ...state,
        plants: state.plants.filter((plant) => plant.id !== action.payload),
      };
    case "DELETE_WORK":
      return {
        ...state,
        plannedWorks: state.plannedWorks.filter(
          (work) => work.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
