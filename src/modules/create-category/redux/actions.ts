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

export function deleteCategory({id}: {id: string}) {
  return {
    type: types.DELETE_CATEGORY,
    payload: {id},
  };
}

export function updateCategory({
  id,
  data,
}: {
  id: string;
  data: createCategoryFormValues;
}) {
  return {
    type: types.UPDATE_CATEGORY,
    payload: {id, data},
  };
}
