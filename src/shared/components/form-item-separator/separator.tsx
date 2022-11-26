import React from 'react';
import {View} from 'react-native';
import styles from './separator.styles';

const Separator = (props: {half?: boolean}) => {
  return <View style={props.half ? styles.halfContainer : styles.container} />;
};

export default Separator;
