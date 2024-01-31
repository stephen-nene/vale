// appAction.js

export const setDarkMode = () => {
  return{
    type: 'SET_DARK_MODE'
  }
}

export const setTrades = (trades) => {
  return {
    type: 'SET_TRADES',
    payload: trades
  };
};