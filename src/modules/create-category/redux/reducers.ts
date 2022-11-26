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

    default:
      return state;
  }
};

export default categories;
