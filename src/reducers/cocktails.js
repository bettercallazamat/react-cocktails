import { GET_SUCCESS, GET_FAIL } from "../constants/actions";

const initialState = {
  cocktails: [],
  error: '',
};

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS:
      return { ...state, cocktails: action.payload };
    case GET_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default cocktailReducer;
