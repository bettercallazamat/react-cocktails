const SELECT_COCKTAIL = 'SELECT_COCKTAIL';

const selectReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_COCKTAIL':
      return action.cocktail;

    default:
      return state;
  }
};

export default selectReducer;
