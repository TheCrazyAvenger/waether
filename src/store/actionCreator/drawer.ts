import { DrawerActionTypes } from '../types/drawer';

export const openDrawerMenu = () => {
  return { type: DrawerActionTypes.OPEN_DRAWER, payload: true };
};

export const closeDrawerMenu = () => {
  return { type: DrawerActionTypes.OPEN_DRAWER, payload: false };
};
