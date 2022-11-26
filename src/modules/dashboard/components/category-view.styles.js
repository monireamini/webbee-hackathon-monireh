import {StyleSheet} from 'react-native';
import {colors, textSize, textWeight} from '../../../shared/styles/styles';

export default StyleSheet.create({
  categoryContainer: {
    backgroundColor: colors.beauBlue,
    margin: 12,
    padding: 12,
    borderRadius: 8,
  },
  title: {
    ...textSize.bigSizeText,
    ...textWeight.bold,
    color: colors.gunMetal,
  },
});
