import React from 'react';
import {FlatList, View} from 'react-native';
import FieldInput from '../../../shared/components/field-input/field-input';
import Separator from '../../../shared/components/form-item-separator/separator';
import {categoryFieldsPropTypes} from './category-fields.types';
import {categoryFieldPropTypes} from './category-field.types';
import AddedField from './added-field';
import styles from './category-fields.styles';

const CategoryFields = (props: categoryFieldsPropTypes) => {
  function handleAddField({name, type}: {name: string; type: string}) {
    if (props.fields.findIndex(field => field.name === name) < 0) {
      // avoid adding two fields with the same name
      props.arrayHelpers.push({name, type});
    }
  }

  function renderField({
    item,
    index,
  }: {
    item: categoryFieldPropTypes;
    index: number;
  }) {
    return (
      <AddedField
        index={index}
        name={item.name}
        type={item.type}
        arrayHelpers={props.arrayHelpers}
      />
    );
  }

  function fieldKeyExtractor(item: categoryFieldPropTypes) {
    return item.name;
  }

  return (
    <View>
      <FlatList
        data={props.fields}
        renderItem={renderField}
        keyExtractor={fieldKeyExtractor}
        style={styles.fieldsListContainer}
        scrollEnabled={false}
      />

      <Separator />

      <FieldInput handleAddField={handleAddField} />
    </View>
  );
};

export default CategoryFields;
