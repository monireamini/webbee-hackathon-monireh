import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './root-reducer';

const middleWares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);

export default store;
