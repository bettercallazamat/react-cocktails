import { FETCH_DATA, SELECT_COCKTAIL } from "../constants/actions";

const cocktailReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    case SELECT_COCKTAIL:
      return action.cocktail;
    default:
      return state;
  }
};

export default cocktailReducer;
