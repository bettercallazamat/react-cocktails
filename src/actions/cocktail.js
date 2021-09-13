import { GET_SUCCESS, GET_FAIL, GET_IN_PROGRESS } from "../constants/actions";
import axios from 'axios';

const getCocktailAction = (id) => async dispatch => {
  try {
    dispatch({
      type: GET_IN_PROGRESS,
    });

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
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

export { getCocktailAction };
