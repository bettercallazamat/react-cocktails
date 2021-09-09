import { fetchAction } from './actions'

const fetchCocktails = () => async (dispatch) => {
  try {
    const response = await axios.get('');
    const cocktails = await response.data;
    dispatch(fetchAction(cocktails));
  } catch (error) {
    return error.message;
  }
  return null;
};

export default fetchCocktails;