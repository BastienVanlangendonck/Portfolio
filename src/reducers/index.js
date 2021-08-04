import { TOGGLE_BURGER } from '../actions';

const initialState = {
  /* APP STATE */
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default reducer;
