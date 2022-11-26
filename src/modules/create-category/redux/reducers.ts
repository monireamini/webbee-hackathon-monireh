import * as types from './types';
import {reduxAction} from '../../../shared/ts-interfaces/shared.types';

const categories = (state = [], action: reduxAction) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default categories;
