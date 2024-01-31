// appReducer.js
const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
  trades: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_DARK_MODE':
      localStorage.setItem('darkMode', !state.darkMode);
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case 'SET_TRADES':
        return {
          trades: action.payload
        }


    default:
      return state;
  }
};

export default productReducer;