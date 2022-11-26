import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {ArrayHelpers} from 'formik';
import {categoryFieldPropTypes} from './category-field.types';
import styles from './added-field.styles';
// @ts-ignore
import RemoveIcon from '../../../shared/icons/remove.png';

const AddedField = (
  props: categoryFieldPropTypes & {index: number; arrayHelpers: ArrayHelpers},
) => {
  function handleRemoveItem() {
    props.arrayHelpers.remove(props.index);
  }

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text>{props.name}</Text>
      </View>

      <View style={styles.center}>
        <Text>{props.type}</Text>
      </View>

      <Pressable style={styles.right} onPress={handleRemoveItem}>
        <Image
          source={RemoveIcon}
          // @ts-ignore
          style={styles.removeIcon}
        />
      </Pressable>
    </View>
  );
};

export default AddedField;
