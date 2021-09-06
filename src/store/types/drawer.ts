export interface DrawerState {
  openDrawer: boolean;
}

export enum DrawerActionTypes {
  OPEN_DRAWER = 'OPEN_DRAWER',
}

interface OpenDrawerAction {
  type: DrawerActionTypes.OPEN_DRAWER;
  payload: boolean;
}

export type DrawerAction = OpenDrawerAction;
