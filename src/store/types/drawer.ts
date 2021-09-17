import { TOGGLE_DRAWER } from '../actionCreator/actionTypes';

export interface DrawerState {
  openDrawer: boolean;
}

interface OpenDrawerAction {
  type: typeof TOGGLE_DRAWER;
  payload: boolean;
}

export type DrawerAction = OpenDrawerAction;
