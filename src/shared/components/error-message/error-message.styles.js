import {StyleSheet} from 'react-native';
import {colors, margins, textSize} from '../../styles/styles';

export default StyleSheet.create({
  container: {
    height: 24,
    marginHorizontal: margins.pageHorizontal,
    justifyContent: 'center',
  },
  text: {
    color: colors.error,
    ...textSize.smallSizeText,
  },
});
