import { CHANGE_FILTER } from '../constants/actions';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
