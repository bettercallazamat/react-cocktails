import { CHANGE_FILTER } from '../constants/actions';

const filterAction = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export default filterAction;
