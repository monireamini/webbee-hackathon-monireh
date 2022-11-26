import {StyleSheet} from 'react-native';
import {colors, margins, textWeight} from '../../../shared/styles/styles';

export default StyleSheet.create({
  selectDateButton: {
    height: 38,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.morningBlue,
    marginHorizontal: margins.pageHorizontal,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
  },
  selectDateText: {
    color: colors.morningBlue,
  },
  selectDateTextBlack: {
    color: colors.gunMetal,
  },

  placeholder: {
    height: 20,
    marginLeft: margins.pageHorizontal,
  },
  placeholderText: {
    color: colors.morningBlue,
    ...textWeight.bold,
  },

  toggleButton: {
    height: 38,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.morningBlue,
    marginHorizontal: margins.pageHorizontal,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  toggleText: {
    color: colors.morningBlue,
  },
});
