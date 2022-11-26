import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {reduxStore} from '../../../shared/ts-interfaces/shared.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../../shared/components/button/button';
import styles from './manage-categories.screen.styles';

const ManageCategoriesScreen = () => {
  const categories = useSelector((state: reduxStore) => state.categories);

  function handleNavigateToAddCategory() {
    //
  }

  return (
    <SafeAreaView style={styles.container}>
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
        <View />
      )}
    </SafeAreaView>
  );
};

export default ManageCategoriesScreen;
