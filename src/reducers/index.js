import { combineReducers } from 'redux';
import filterReducer from './filter';
import cocktailsReducer from './cocktails';
import cocktailReducer from './cocktail';

const rootReducer = combineReducers({
  cocktails: cocktailsReducer,
  cocktail: cocktailReducer,
  filter: filterReducer,
});

export default rootReducer;
