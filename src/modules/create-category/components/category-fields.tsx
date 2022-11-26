import React from 'react';
import {FlatList, View} from 'react-native';
import FieldInput from '../../../shared/components/field-input/field-input';
import Separator from '../../../shared/components/form-item-separator/separator';
import {categoryFieldsPropTypes} from './category-fields.types';
import {categoryFieldPropTypes} from './category-field.types';
import AddedField from './added-field';

const CategoryFields = (props: categoryFieldsPropTypes) => {
  function handleAddField({name, type}: {name: string; type: string}) {
    props.arrayHelpers.push({name, type});
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
      />

      <Separator />

      <FieldInput handleAddField={handleAddField} />
    </View>
  );
};

export default CategoryFields;
