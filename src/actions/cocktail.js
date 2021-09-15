import axios from 'axios';
import { GET_COCKTAIL_SUCCESS, GET_COCKTAIL_FAIL, GET_COCKTAIL_IN_PROGRESS } from '../constants/actions';

const getCocktailAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COCKTAIL_IN_PROGRESS,
    });

    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    dispatch({
      type: GET_COCKTAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COCKTAIL_FAIL,
      error: error.message,
    });
  }
};

export default getCocktailAction;
