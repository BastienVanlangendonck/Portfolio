export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const toggleBurger = () => ({
  type: TOGGLE_BURGER,
});

export const SET_PROGRESSION_BAR = 'SET_PROGRESSION_BAR';
export const setProgressionsBar = () => ({
  type: SET_PROGRESSION_BAR,
});

export const SET_WINDOW_OFFSET = 'SET_WINDOW_OFFSET';
export const setWindowOffset = (offset) => ({
  type: SET_WINDOW_OFFSET,
  offset,
});
