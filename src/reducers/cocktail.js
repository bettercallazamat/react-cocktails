import { GET_COCKTAIL_SUCCESS, GET_COCKTAIL_FAIL, GET_COCKTAIL_IN_PROGRESS } from '../constants/actions';

const initialState = {
  cocktail: {},
  error: null,
  loading: true,
};

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAIL_IN_PROGRESS:
      return { ...state, loading: true };
    case GET_COCKTAIL_SUCCESS:
      return { ...state, cocktail: action.payload, loading: false };
    case GET_COCKTAIL_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default cocktailReducer;
