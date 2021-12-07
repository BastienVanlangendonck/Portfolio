/* eslint-disable no-case-declarations */

import { skills, skills0 } from 'src/data';
import { TOGGLE_BURGER, SET_PROGRESSION_BAR, SET_WINDOW_OFFSET } from '../actions';

const initialState = {
  /* APP STATE */
  isOpen: false,
  skills: skills0,
  skillOffset: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case SET_WINDOW_OFFSET:
      return {
        ...state,
        skillOffset: action.offset,
      };
    case SET_PROGRESSION_BAR:
      let newSkillsArray = [];
      if (state.skillOffset) {
        newSkillsArray = skills;
      }
      else {
        newSkillsArray = skills0;
      }
      return {
        ...state,
        skills: newSkillsArray,
      };
    default:
      return state;
  }
};

export default reducer;
