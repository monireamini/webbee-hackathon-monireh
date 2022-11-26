import React from 'react';
import {View} from 'react-native';
import styles from './layout.styles';
import {layoutPropTypes} from './layout.types';

const Layout = (props: layoutPropTypes) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Layout;
