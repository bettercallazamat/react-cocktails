import { GET_SUCCESS, GET_FAIL, GET_IN_PROGRESS } from "../constants/actions";

const initialState = {
  cocktails: {},
  error: '',
  loading: true,
};

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IN_PROGRESS:
      return { ...state, loading: true };
    case GET_SUCCESS:
      return { ...state, cocktails: action.payload, loading: false };
    case GET_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default cocktailReducer;
