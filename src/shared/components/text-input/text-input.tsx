import React from 'react';
import {TextInput, Text, View} from 'react-native';
import {inputPropTypes} from './text-input.types';
import styles from './text-input.styles';

const CustomInput = (props: inputPropTypes) => {
  const {value, placeholder, onChangeText, keyboardType = 'default'} = props;

  return (
    <View style={styles.container}>
      <View style={styles.placeholder}>
        {!!value && <Text style={styles.placeholderText}>{placeholder}</Text>}
      </View>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
};

export default CustomInput;
