import React from 'react';
import Layout from '../../../shared/components/layout/layout';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {reduxStore} from '../../../shared/ts-interfaces/shared.types';
import {
  categoryInReduxStore,
  createCategoryFormValues,
} from '../../create-category/components/create-category.screen.types';
import CategoryView from './category-view';

const DashboardScreen = ({navigation}: {navigation: {navigate: Function}}) => {
  const categories = useSelector((state: reduxStore) => state.categories);

  function renderCategory({item}: {item: categoryInReduxStore}) {
    return (
      <CategoryView
        id={item.id}
        title={item.title}
        fields={item.fields}
        titleField={item.titleField}
        navigation={navigation}
      />
    );
  }

  function categoryKeyExtractor(item: createCategoryFormValues) {
    return item.title;
  }

  return (
    <Layout>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={categoryKeyExtractor}
      />
    </Layout>
  );
};

export default DashboardScreen;
