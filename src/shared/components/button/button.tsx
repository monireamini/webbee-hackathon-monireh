import React from 'react';
import {Pressable, Text} from 'react-native';
import {buttonPropTypes} from './button.types';
import styles from './button.styles';

const CustomButton = (props: buttonPropTypes) => {
  const {onPress, label} = props;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default CustomButton;
