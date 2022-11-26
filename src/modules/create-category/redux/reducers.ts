import * as types from './types';
import {reduxAction} from '../../../shared/ts-interfaces/shared.types';
import {uniqueId} from '../../../shared/utils/uuid';
import {categoryInReduxStore} from '../components/create-category.screen.types';

const categories = (state = [], action: reduxAction) => {
  switch (action.type) {
    case types.ADD_CATEGORY:
      return [{id: uniqueId(), ...action.payload}, ...state];

    case types.DELETE_CATEGORY:
      return [
        ...state.filter(
          (category: categoryInReduxStore) => category.id !== action.payload.id,
        ),
      ];

    case types.UPDATE_CATEGORY:
      return [
        ...state.map((category: categoryInReduxStore) =>
          category.id === action.payload.id ? action.payload.data : category,
        ),
      ];

    default:
      return state;
  }
};

export default categories;
