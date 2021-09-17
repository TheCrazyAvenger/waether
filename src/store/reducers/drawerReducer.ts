import { DrawerState, DrawerAction } from '../types/drawer';
import { TOGGLE_DRAWER } from '../actionCreator/actionTypes';

const initialState: DrawerState = {
  openDrawer: false,
};

export const drawerReducer = (
  state = initialState,
  action: DrawerAction
): DrawerState => {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return { ...state, openDrawer: !state.openDrawer };
    }

    default:
      return state;
  }
};
