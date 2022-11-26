import React from 'react';
import {Image, Text, View} from 'react-native';
import {categoryFieldPropTypes} from './category-field.types';
import styles from './added-field.styles';
// @ts-ignore
import RemoveIcon from '../../../shared/icons/remove.png';

const AddedField = (props: categoryFieldPropTypes) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>{props.name}</Text>
      </View>

      <View style={styles.center}>
        <Text>{props.type}</Text>
      </View>

      <View style={styles.right}>
        <Image
          source={RemoveIcon}
          // @ts-ignore
          style={styles.removeIcon}
        />
      </View>
    </View>
  );
};

export default AddedField;
