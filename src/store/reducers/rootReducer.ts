import { combineReducers } from 'redux';
import { drawerReducer } from './drawerReducer';

const rootReducer = combineReducers({
  drawer: drawerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
