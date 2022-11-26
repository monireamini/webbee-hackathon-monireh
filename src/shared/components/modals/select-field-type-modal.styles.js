import {StyleSheet} from 'react-native';
import {center, colors, margins, textSize} from '../../styles/styles';

export default StyleSheet.create({
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
    color: colors.gunMetal,
  },
  typeButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 4,
    ...center,
    backgroundColor: colors.beauBlue.concat('FF'),
    borderRadius: 8,
  },
  typeButtonText: {
    color: colors.gunMetal,
  },
});
