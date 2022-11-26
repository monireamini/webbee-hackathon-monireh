import React from 'react';
import {View, Text} from 'react-native';
import {errorMessagePropTypes} from './error-message.types';
import styles from './error-message.styles';

const ErrorMessage = (props: errorMessagePropTypes) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default ErrorMessage;
