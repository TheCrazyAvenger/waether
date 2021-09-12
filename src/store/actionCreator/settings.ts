import { SET_DARK_MOD } from './actionTypes';

export const setDarkMod = (bool: boolean | null) => {
  if (bool) {
    return {
      type: SET_DARK_MOD,
      payload: bool,
    };
  } else {
    return {
      type: SET_DARK_MOD,
    };
  }
};
