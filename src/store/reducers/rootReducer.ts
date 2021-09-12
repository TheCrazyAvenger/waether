import { combineReducers } from 'redux';
import { drawerReducer } from './drawerReducer';
import { settingsReducer } from './settingsReducer';
import { weatherReducer } from './wetherReducer';

const rootReducer = combineReducers({
  drawer: drawerReducer,
  weather: weatherReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
