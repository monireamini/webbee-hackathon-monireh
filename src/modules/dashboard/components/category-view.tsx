import React from 'react';
import {Text, View} from 'react-native';
import {createCategoryFormValues} from '../../create-category/components/create-category.screen.types';
import styles from './category-view.styles';

const CategoryView = (props: createCategoryFormValues) => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default CategoryView;
