import {StyleSheet} from 'react-native';
import {
  center,
  colors,
  margins,
  numColumns,
  textSize,
  textWeight,
} from '../../../shared/styles/styles';

export default StyleSheet.create({
  mainContainer: {
    marginVertical: 12,
    paddingTop: 12,
    paddingBottom: 32,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginRight: numColumns === 2 ? 24 : 0,
    width: numColumns === 2 ? '48%' : '100%',
  },
  container: {
    paddingVertical: margins.formVertical,
  },
  machineTitle: {
    marginHorizontal: margins.pageHorizontal,
    ...textSize.mediumSizeText,
    ...textWeight.bold,
    marginBottom: 12,
  },
  submitButtonContainer: {
    paddingLeft: margins.pageHorizontal,
    ...center,
  },
});
