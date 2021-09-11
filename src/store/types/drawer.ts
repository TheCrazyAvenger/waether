import { TOGGLE_DRAWER, SEARCH_CITY } from '../actionCreator/actionTypes';

export interface DrawerState {
  openDrawer: boolean;
  name: string | null;
  country: string | null;
  temp: number | null;
  icon: string | null;
}

interface OpenDrawerAction {
  type: typeof TOGGLE_DRAWER;
  payload: boolean;
}

interface SearchCityAction {
  type: typeof SEARCH_CITY;
  name: string | null;
  country: string | null;
  temp: number | null;
  icon: string | null;
}

export type DrawerAction = OpenDrawerAction | SearchCityAction;
