import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../../shared/components/button/button';
import styles from './category-fields.styles';
import FieldInput from '../../../shared/components/field-input/field-input';
import Separator from '../../../shared/components/form-item-separator/separator';

const CategoryFields = () => {
  return (
    <View>
      <FieldInput value={''} placeholder={'Field Name'} onChangeText={() => {}} />

      <Separator />

      <View style={styles.container}>
        <CustomButton onPress={() => {}} label={'Add new field'} />
      </View>
    </View>
  );
};

export default CategoryFields;
