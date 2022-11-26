import {categoryFieldPropTypes} from './category-field.types';

export interface createCategoryFormValues {
  title: string;
  fields: categoryFieldPropTypes[];
  titleField: string;
}

export interface createCategoriesPropTypes {
  navigation: {goBack: Function};
}
