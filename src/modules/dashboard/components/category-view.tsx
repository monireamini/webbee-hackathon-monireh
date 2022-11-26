import React from 'react';
import {Text, View} from 'react-native';
import {categoryInReduxStore} from '../../create-category/components/create-category.screen.types';
import styles from './category-view.styles';
import CustomButton from '../../../shared/components/button/button';
import {colors} from '../../../shared/styles/styles';

const CategoryView = (
  props: categoryInReduxStore & {navigation: {navigate: Function}},
) => {
  function handleNavigateToAddMachine() {
    props.navigation.navigate('CreateMachine', {categoryId: props.id});
  }

  const machines = [];

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <CustomButton
          onPress={handleNavigateToAddMachine}
          label={'Add new Item'}
          width={'40%'}
          backgroundColor={colors.gunMetal}
        />
      </View>

      {machines?.length === 0 ? (
        <View style={styles.emptyPlaceholder}>
          <Text style={styles.emptyPlaceholderTitle}>No Machines</Text>
          <Text style={styles.emptyPlaceholderDescription}>
            Add the first one by clicking on the add button!
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default CategoryView;
