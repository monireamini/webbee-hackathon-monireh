import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {categoryFieldPropTypes} from '../create-category/components/category-field.types';
import {fieldTypeEnum} from '../../data/field-types';
import CustomInput from '../../shared/components/text-input/text-input';
import styles from './dynamic-field.styles';
import {colors} from '../../shared/styles/styles';

const DynamicField = (props: categoryFieldPropTypes) => {
  if (props.type === fieldTypeEnum.TEXT) {
    return (
      <CustomInput
        value={''}
        placeholder={props.name}
        onChangeText={() => {}}
      />
    );
  }

  if (props.type === fieldTypeEnum.NUMBER) {
    return (
      <CustomInput
        value={''}
        placeholder={props.name}
        keyboardType={'numeric'}
        onChangeText={() => {}}
      />
    );
  }

  if (props.type === fieldTypeEnum.DATE) {
    return (
      <Pressable style={styles.selectDateButton}>
        <Text style={styles.selectDateText}>Click to select {props.name}</Text>
      </Pressable>
    );
  }

  if (props.type === fieldTypeEnum.CHECKBOX) {
    return (
      <View style={styles.toggleButton}>
        <Text style={styles.toggleText}>{props.name}?</Text>
        <ToggleSwitch
          isOn={false}
          onColor={colors.morningBlue}
          offColor={colors.disabled}
          size="medium"
          onToggle={() => {}}
        />
      </View>
    );
  }

  return null;
};

export default DynamicField;
