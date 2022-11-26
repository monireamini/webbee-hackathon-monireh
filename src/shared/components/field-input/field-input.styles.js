import {StyleSheet} from 'react-native';
import {center, colors, margins, textSize, textWeight} from '../../styles/styles';

export default StyleSheet.create({
  mainRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    flex: 4,
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
  },

  typeContainer: {
    flex: 2,
    height: 36,
    borderWidth: 1,
    borderColor: colors.morningBlue,
    borderRadius: 8,
    ...center,
    marginLeft: margins.pageHorizontal / 2,
  },
  typeText: {
    color: colors.morningBlue,
  },

  removeButtonContainer: {
    flex: 1,
    marginLeft: margins.pageHorizontal / 2,
  },

  modalContainer: {
    flex: 1,
    ...center,
    backgroundColor: colors.gunMetal.concat('99'),
  },
  modalContent: {
    backgroundColor: colors.champagne,
    paddingHorizontal: 3 * margins.pageHorizontal,
    paddingVertical: margins.pageHorizontal,
    borderRadius: 24,
  },
  modalTitle: {
    marginVertical: 24,
    ...textSize.smallSizeText,
  },
  typeButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 4,
    ...center,
    backgroundColor: colors.beauBlue.concat('FF'),
    borderRadius: 8,
  },
});
