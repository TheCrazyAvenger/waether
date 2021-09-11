import { DrawerState, DrawerAction } from '../types/drawer';
import { TOGGLE_DRAWER, SEARCH_CITY } from '../actionCreator/actionTypes';

const initialState: DrawerState = {
  openDrawer: false,
  name: null,
  country: null,
  temp: null,
  icon: null,
};

export const drawerReducer = (
  state = initialState,
  action: DrawerAction
): DrawerState => {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return { ...state, openDrawer: !state.openDrawer };
    }
    case SEARCH_CITY: {
      return {
        ...state,
        name: action.name,
        country: action.country,
        temp: action.temp,
        icon: action.icon,
      };
    }
    default:
      return state;
  }
};
