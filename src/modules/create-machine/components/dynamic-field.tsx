import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {categoryFieldPropTypes} from '../../create-category/components/category-field.types';
import {fieldTypeEnum} from '../../../data/field-types';
import CustomInput from '../../../shared/components/text-input/text-input';
import styles from './dynamic-field.styles';
import {colors} from '../../../shared/styles/styles';

const DynamicField = (
  props: categoryFieldPropTypes & {value: any; setFieldValue: Function},
) => {
  if (props.type === fieldTypeEnum.TEXT) {
    function handleChangeText(txt: string) {
      props.setFieldValue([props.name], txt);
    }

    return (
      <CustomInput
        value={props.value}
        placeholder={props.name}
        onChangeText={handleChangeText}
      />
    );
  }

  if (props.type === fieldTypeEnum.NUMBER) {
    function handleChangeNumber(txt: string) {
      props.setFieldValue([props.name], parseInt(txt, 10));
    }

    return (
      <CustomInput
        value={props.value}
        placeholder={props.name}
        keyboardType={'numeric'}
        onChangeText={handleChangeNumber}
      />
    );
  }

  if (props.type === fieldTypeEnum.DATE) {
    return (
      <Pressable style={styles.selectDateButton}>
        <Text style={styles.selectDateText}>
          {props.value || `Click to select ${props.name}`}
        </Text>
      </Pressable>
    );
  }

  if (props.type === fieldTypeEnum.CHECKBOX) {
    function handleToggle(switchValue: boolean) {
      props.setFieldValue([props.name], switchValue);
    }

    return (
      <View style={styles.toggleButton}>
        <Text style={styles.toggleText}>{props.name}?</Text>
        <ToggleSwitch
          isOn={props.value}
          onToggle={handleToggle}
          onColor={colors.morningBlue}
          offColor={colors.disabled}
          size="medium"
        />
      </View>
    );
  }

  return null;
};

export default DynamicField;
