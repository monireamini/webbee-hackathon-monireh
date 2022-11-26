import {StyleSheet} from 'react-native';
import {colors, margins, textWeight} from '../../styles/styles';

export default StyleSheet.create({
  container: {
    marginHorizontal: margins.pageHorizontal,
  },
  placeholder: {
    height: 20,
  },
  placeholderText: {
    color: colors.morningBlue,
    ...textWeight.bold,
  },
  input: {
    height: 36,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.morningBlue,
  },
});
