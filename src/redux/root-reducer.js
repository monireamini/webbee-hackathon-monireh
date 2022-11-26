import {combineReducers} from 'redux';
import categories from '../modules/manage-categories/redux/reducers';

const reducer = combineReducers({
  categories,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
