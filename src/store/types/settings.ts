import { SET_DARK_MOD } from '../actionCreator/actionTypes';

export interface SettingsState {
  darkMode: boolean;
}

interface SetDarkModAction {
  type: typeof SET_DARK_MOD;
}

export type SettingsAction = SetDarkModAction;
