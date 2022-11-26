import * as types from './types';
import {reduxAction} from '../../../shared/ts-interfaces/shared.types';
import {uniqueId} from '../../../shared/utils/uuid';

const categories = (state = [], action: reduxAction) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return [{id: uniqueId(), ...action.payload}, ...state];

    default:
      return state;
  }
};

export default categories;
