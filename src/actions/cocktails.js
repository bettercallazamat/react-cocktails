import { GET_COCKTAILS_SUCCESS, GET_COCKTAILS_FAIL, GET_COCKTAILS_IN_PROGRESS } from "../constants/actions";
import axios from 'axios';

const getCocktailsAction = (initial = true, name = null, category = null, alchogolic = null) => async dispatch => {
  try {
    dispatch({
      type: GET_COCKTAILS_IN_PROGRESS,
    });

    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    dispatch({
      type: GET_COCKTAILS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COCKTAILS_FAIL,
      error: error.message,
    });
  }
};

export { getCocktailsAction };
