// appActions.js

export const setDarkMode = () => {
  return {
    type: "SET_DARK_MODE",
  };
};

export const setSpeedDate = (speedDates) => { 
  return {
    type: 'SET_SPEED_DATES',
    payload: speedDates,
  };
}
