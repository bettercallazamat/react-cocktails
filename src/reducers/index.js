import { combineReducers } from 'redux';
import filterReducer from './filter';
import cocktailReducer from './cocktails';

const rootReducer = combineReducers({
  filterReducer,
  cocktailReducer,
});

export default rootReducer;
