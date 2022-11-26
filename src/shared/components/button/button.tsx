import React from 'react';
import {Pressable, Text} from 'react-native';
import {buttonPropTypes} from './button.types';
import styles from './button.styles';
import {colors} from '../../styles/styles';

const CustomButton = (props: buttonPropTypes) => {
  const {
    onPress,
    label,
    backgroundColor = colors.morningBlue,
    width = '100%',
  } = props;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {backgroundColor, width}]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default CustomButton;
