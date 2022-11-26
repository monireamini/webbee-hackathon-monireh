import {fieldTypeEnum} from '../../data/field-types';
import {categoryFieldPropTypes} from '../../modules/create-category/components/category-field.types';

export function generateInitValues(fields: categoryFieldPropTypes[]) {
  let initValues = {};
  for (let index = 0; index < fields.length; index++) {
    const {name, type} = fields[index];
    if (type === fieldTypeEnum.TEXT) {
      Object.assign(initValues, {[name]: ''});
    } else if (type === fieldTypeEnum.NUMBER) {
      Object.assign(initValues, {[name]: 0});
    } else if (type === fieldTypeEnum.DATE) {
      Object.assign(initValues, {[name]: ''});
    } else if (type === fieldTypeEnum.CHECKBOX) {
      Object.assign(initValues, {[name]: false});
    }
  }

  return initValues;
}
