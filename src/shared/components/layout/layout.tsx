import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../../../modules/manage-categories/components/manage-categories.screen.styles';
import {layoutPropTypes} from './layout.types';

const Layout = (props: layoutPropTypes) => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

export default Layout;
