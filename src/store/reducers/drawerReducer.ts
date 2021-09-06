import { DrawerState, DrawerAction, DrawerActionTypes } from '../types/drawer';

const initialState: DrawerState = {
  openDrawer: false,
};

export const drawerReducer = (
  state = initialState,
  action: DrawerAction
): DrawerState => {
  switch (action.type) {
    case DrawerActionTypes.OPEN_DRAWER: {
      return { ...state, openDrawer: action.payload };
    }
    default:
      return state;
  }
};
