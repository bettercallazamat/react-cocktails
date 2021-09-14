import { GET_COCKTAILS_SUCCESS, GET_COCKTAILS_FAIL, GET_COCKTAILS_IN_PROGRESS } from '../constants/actions';

const initialState = {
  cocktails: {},
  error: null,
  loading: true,
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS_IN_PROGRESS:
      return { ...state, loading: true };
    case GET_COCKTAILS_SUCCESS:
      return { ...state, cocktails: action.payload, loading: false };
    case GET_COCKTAILS_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default cocktailsReducer;
