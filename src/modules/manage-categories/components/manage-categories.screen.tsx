import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {reduxStore} from '../../../shared/ts-interfaces/shared.types';
import CustomButton from '../../../shared/components/button/button';
import styles from './manage-categories.screen.styles';
import Layout from '../../../shared/components/layout/layout';
import {manageCategoriesPropTypes} from './manage-categories.screen.types';
import {categoryInReduxStore} from '../../create-category/components/create-category.screen.types';
import CategoryInManageMode from './category-in-manage-mode';

const ManageCategoriesScreen = (props: manageCategoriesPropTypes) => {
  const categories = useSelector((state: reduxStore) => state.categories);

  function handleNavigateToAddCategory() {
    props.navigation.navigate('CreateCategory');
  }

  function renderAddButton() {
    return (
      <View style={styles.addButton}>
        <CustomButton
          onPress={handleNavigateToAddCategory}
          label={'Add New Category'}
        />

        <Text style={styles.title}>Existing Categories:</Text>
        <Text style={styles.smallText}>You can edit them right here.</Text>
      </View>
    );
  }

  function renderCategoryInEditMode({item}: {item: categoryInReduxStore}) {
    return (
      <CategoryInManageMode
        id={item.id}
        title={item.title}
        fields={item.fields}
        titleField={item.titleField}
      />
    );
  }

  function categoryKeyExtractor(item: categoryInReduxStore) {
    return item.id;
  }

  return (
    <Layout>
      {categories?.length === 0 ? (
        <View style={styles.emptyPlaceholder}>
          <Text style={styles.emptyPlaceholderTitle}>No categories</Text>
          <Text style={styles.emptyPlaceholderDescription}>
            Add the first one by clicking on the below button!
          </Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              onPress={handleNavigateToAddCategory}
              label={'Add a new Category'}
            />
          </View>
        </View>
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategoryInEditMode}
          keyExtractor={categoryKeyExtractor}
          ListHeaderComponent={renderAddButton}
        />
      )}
    </Layout>
  );
};

export default ManageCategoriesScreen;
