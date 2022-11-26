import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './layout.styles';
import {layoutPropTypes} from './layout.types';

const Layout = (props: layoutPropTypes) => {
  return (
    <SafeAreaView edges={['right', 'left', 'bottom']} style={styles.container}>
      {props.children}
    </SafeAreaView>
  );
};

export default Layout;
