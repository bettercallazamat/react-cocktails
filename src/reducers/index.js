import { combineReducers } from 'redux';
import filterReducer from './filter';
import cocktailReducer from './cocktails';
import selectReducer from './select';

const rootReducer = combineReducers({
  filterReducer,
  cocktailReducer,
  selectReducer,
});

export default rootReducer;
