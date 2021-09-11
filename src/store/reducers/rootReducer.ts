import { combineReducers } from 'redux';
import { drawerReducer } from './drawerReducer';
import { weatherReducer } from './wetherReducer';

const rootReducer = combineReducers({
  drawer: drawerReducer,
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
