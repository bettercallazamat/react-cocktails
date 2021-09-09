const FETCH_DATA = 'FETCH_DATA';

const cocktailReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    default:
      return state;
  }
};

export default cocktailReducer;
