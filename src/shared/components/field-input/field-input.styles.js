import {Platform, StyleSheet} from 'react-native';
import {center, colors, margins, textWeight} from '../../styles/styles';

export default StyleSheet.create({
  mainRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: margins.pageHorizontal,
  },
  container: {
    flex: 2,
    marginLeft: margins.pageHorizontal,
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
    paddingHorizontal: 10,
    paddingBottom: Platform.OS === 'android' ? 8 : 0,
    color: colors.gunMetal,
  },

  typeMainContainer: {
    flex: 1,
    marginLeft: margins.pageHorizontal / 2,
  },
  typeContainer: {
    height: 36,
    borderWidth: 1,
    borderColor: colors.morningBlue,
    borderRadius: 8,
    ...center,
  },
  typeText: {
    color: colors.morningBlue,
  },
  typeTextBlack: {
    color: colors.gunMetal,
  },

  removeButtonContainer: {
    flex: 1,
    marginLeft: margins.pageHorizontal / 2,
    height: 36,
    ...center,
    borderRadius: 8,
    backgroundColor: colors.error,
  },

  submitButtonContainer: {
    marginHorizontal: margins.pageHorizontal,
    marginTop: 12,
  },
});
