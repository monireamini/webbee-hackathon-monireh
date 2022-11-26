import {Platform, StyleSheet} from 'react-native';
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
    borderWidth: 1,
    borderColor: colors.morningBlue,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingBottom: Platform.OS === 'android' ? 8 : 0,
    color: colors.gunMetal,
  },
});
