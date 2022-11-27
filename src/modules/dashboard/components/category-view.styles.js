import {StyleSheet} from 'react-native';
import {
  center,
  colors,
  margins,
  textSize,
  textWeight,
} from '../../../shared/styles/styles';

export default StyleSheet.create({
  categoryContainer: {
    backgroundColor: colors.beauBlue,
    margin: 12,
    padding: 12,
    borderRadius: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...textSize.bigSizeText,
    ...textWeight.bold,
    color: colors.gunMetal,
  },

  emptyPlaceholder: {
    ...center,
    paddingHorizontal: margins.pageHorizontal,
    marginTop: 26,
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
  },
  listContainer: {
    paddingBottom: 24,
  },
});
