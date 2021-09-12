import { SET_DARK_MOD } from '../actionCreator/actionTypes';
import { SettingsState, SettingsAction } from '../types/settings';

const initialState: SettingsState = {
  darkMode: false,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsAction
): SettingsState => {
  switch (action.type) {
    case SET_DARK_MOD: {
      return { ...state, darkMode: action.payload || !state.darkMode };
    }
    default:
      return state;
  }
};
