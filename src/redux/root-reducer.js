import {combineReducers} from 'redux';
import categories from '../modules/create-category/redux/reducers';

const reducer = combineReducers({
  categories,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
