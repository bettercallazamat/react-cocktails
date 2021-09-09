const fetchAction = (data) => ({
  type: 'FETCH_DATA',
  data,
});

const filterAction = (filter) => ({
  type: 'CHANGE_FILTER',
  filter,
});

const selectAction = (cocktail) => ({
  type: 'SELECT_COCKTAIL',
  cocktail,
});

export { fetchAction, filterAction, selectAction };
