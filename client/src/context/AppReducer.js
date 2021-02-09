// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case 'GET_WORKS':
      return {
        ...state,
        loading: false,
        works: action.payload,
      };
    case 'GET_PLANTS':
      return {
        ...state,
        loading: false,
        plants: action.payload,
      };
    case 'GET_MATERIALS':
      return {
        ...state,
        loading: false,
        materials: action.payload,
      };
    case 'GET_USER':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case 'GET_POSTS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case 'DELETE_MATERIAL':
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material._id !== action.payload
        ),
      };
    case 'DELETE_PLANT':
      return {
        ...state,
        plants: state.plants.filter((plant) => plant._id !== action.payload),
      };
    case 'DELETE_WORK':
      return {
        ...state,
        works: state.works.filter((work) => work._id !== action.payload),
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case 'ADD_MATERIAL':
      return {
        ...state,
        materials: [...state.materials, action.payload],
      };
    case 'ADD_PLANT':
      return {
        ...state,
        plants: [...state.plants, action.payload],
      };
    case 'ADD_WORK':
      return {
        ...state,
        works: [...state.works, action.payload],
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case 'EDIT_MATERIAL':
      return {
        ...state,
        materials: state.materials.filter(
          (material) => material._id === action.payload
        ),
      };
    case 'EDIT_PLANT':
      return {
        ...state,
        plants: state.plants.filter((plant) => plant._id === action.payload),
      };
    case 'EDIT_WORK':
      return {
        ...state,
        works: state.works.filter((work) => work._id === action.payload),
      };
    case 'EDIT_USER_DATA':
      return {
        ...state,
        users: state.users.filter((data) => data._id === action.payload),
      };
    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post._id === action.payload),
      };
    case 'WORKS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'PLANTS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'MATERIALS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'USER_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'POSTS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
