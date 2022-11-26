import React from 'react';
import CategoryView from '../dashboard/components/category-view';
import {useSelector} from 'react-redux';
import {reduxStore} from '../../shared/ts-interfaces/shared.types';
import {categoryInReduxStore} from '../create-category/components/create-category.screen.types';

// @ts-ignore
const FilteredCategory = ({route, navigation}) => {
  let category: categoryInReduxStore;

  const categoryItemInRedux = useSelector((state: reduxStore) => state.categories).find(
    (item: categoryInReduxStore) => item.id === route.params.id,
  );

  if (categoryItemInRedux) {
    category = categoryItemInRedux;
    return (
      <CategoryView
        title={category.title}
        fields={category.fields}
        titleField={category.titleField}
        navigation={navigation}
      />
    );
  }
  return null;
};

export default FilteredCategory;
