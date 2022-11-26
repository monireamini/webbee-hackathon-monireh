import {combineReducers} from 'redux';
import categories from '../modules/create-category/redux/reducers';
import machines from '../modules/create-machine/redux/reducers';

const reducer = combineReducers({
  categories,
  machines,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
