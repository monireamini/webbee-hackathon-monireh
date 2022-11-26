import * as types from './types';
import {createCategoryFormValues} from '../components/create-category.screen.types';

export function addCategory({
  title,
  fields,
  titleField,
}: createCategoryFormValues) {
  return {
    type: types.ADD_CATEGORY,
    payload: {title, fields, titleField},
  };
}
