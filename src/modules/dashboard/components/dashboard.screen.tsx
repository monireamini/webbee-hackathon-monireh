import React from 'react';
import Layout from '../../../shared/components/layout/layout';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {reduxStore} from '../../../shared/ts-interfaces/shared.types';
import {
  categoryInReduxStore,
  createCategoryFormValues,
} from '../../create-category/components/create-category.screen.types';
import CategoryView from './category-view';
import styles from '../../manage-categories/components/manage-categories.screen.styles';
import CustomButton from '../../../shared/components/button/button';

const DashboardScreen = ({navigation}: {navigation: {navigate: Function}}) => {
  const categories = useSelector((state: reduxStore) => state.categories);

  function handleNavigateToAddCategory() {
    navigation.navigate('CreateCategory');
  }

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
      {categories?.length === 0 ? (
        <View style={styles.emptyPlaceholder}>
          <Text style={styles.emptyPlaceholderTitle}>No categories</Text>
          <Text style={styles.emptyPlaceholderDescription}>
            Add the first one by clicking on the below button!
          </Text>
          <CustomButton
            onPress={handleNavigateToAddCategory}
            label={'Add a new Category'}
          />
        </View>
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={categoryKeyExtractor}
        />
      )}
    </Layout>
  );
};

export default DashboardScreen;
