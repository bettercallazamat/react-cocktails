import { GET_SUCCESS, GET_FAIL } from "../constants/actions";

const getAction = () => async dispatch => {
  try {
    const response = await axios.get('');
    dispatch({
      type: GET_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FAIL,
      error: error.message,
    });
  }
};

export { getAction };
