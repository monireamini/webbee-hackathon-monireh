import {StyleSheet} from 'react-native';
import {colors, margins} from '../../../shared/styles/styles';

export default StyleSheet.create({
  mainContainer: {
    marginVertical: 12,
    paddingTop: 12,
    paddingBottom: 32,
    backgroundColor: colors.white,
    borderRadius: 20,
  },
  container: {
    paddingVertical: margins.formVertical,
  },
  submitButtonContainer: {
    paddingHorizontal: margins.formVertical,
  },
});
