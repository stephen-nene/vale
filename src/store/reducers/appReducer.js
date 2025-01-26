// appReducer.js
const initialState = {
  darkMode: localStorage.getItem("darkMode") === "true",
  speedDates: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      localStorage.setItem("darkMode", !state.darkMode);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case 'SET_SPEED_DATES':
      return {
       ...state,
        speedDates: action.payload,
      };


    default:
      return state;
  }
};

export default appReducer;
