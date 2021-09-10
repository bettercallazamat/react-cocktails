import { combineReducers } from 'redux';
import filterReducer from './filter';
import cocktailReducer from './cocktails';

const rootReducer = combineReducers({
  data: cocktailReducer,
  filter: filterReducer,
});

export default rootReducer;
