import React from 'react';
import {Animated, Pressable, Text} from 'react-native';
import {buttonPropTypes} from './button.types';
import styles from './button.styles';
import {colors, dimensions, margins} from '../../styles/styles';

const CustomButton = (props: buttonPropTypes) => {
  const {
    onPress,
    label,
    backgroundColor = colors.morningBlue,
    width = dimensions.windowWidth - 2 * margins.pageHorizontal,
  } = props;

  const animated = new Animated.Value(1);

  function fadeIn() {
    Animated.timing(animated, {
      toValue: 0.6,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  function fadeOut() {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={[styles.container, {backgroundColor, width}]}>
      <Animated.View style={{opacity: animated}}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default CustomButton;
