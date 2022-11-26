import {StyleSheet} from 'react-native';
import {
  center,
  colors,
  dimensions,
  margins,
  textSize,
  textWeight,
} from '../../styles/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.morningBlue,
    height: 50,
    width: dimensions.windowWidth - 2 * margins.pageHorizontal,
    borderRadius: 10,
    ...center,
  },
  label: {
    color: colors.white,
    ...textSize.smallSizeText,
    ...textWeight.bold,
  },
});
