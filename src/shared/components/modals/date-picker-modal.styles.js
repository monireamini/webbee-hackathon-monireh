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
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: margins.pageHorizontal,
    borderRadius: 24,
  },
  modalTitle: {
    marginVertical: 24,
    ...textSize.smallSizeText,
  },
});
