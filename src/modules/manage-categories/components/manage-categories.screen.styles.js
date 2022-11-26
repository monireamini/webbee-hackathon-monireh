import {StyleSheet} from 'react-native';
import {
  center,
  colors,
  margins,
  textSize,
  textWeight,
} from '../../../shared/styles/styles';

export default StyleSheet.create({
  emptyPlaceholder: {
    flex: 1,
    ...center,
    paddingHorizontal: margins.pageHorizontal,
  },
  emptyPlaceholderTitle: {
    ...textSize.mediumSizeText,
    ...textWeight.bold,
    color: colors.gunMetal,
    marginBottom: margins.textVertical,
  },
  emptyPlaceholderDescription: {
    ...textSize.smallSizeText,
    ...textWeight.bold,
    color: colors.gunMetal,
    marginBottom: margins.textVertical,
    textAlign: 'center',
  },
  addButton: {
    marginLeft: margins.pageHorizontal,
    marginTop: 12,
  },
  title: {
    ...textSize.bigSizeText,
    ...textWeight.bold,
    marginTop: 20,
  },
});
