import {StyleSheet} from 'react-native';
import {colors, margins} from '../../../shared/styles/styles';

const commonContainer = {
  borderRadius: 8,
  height: 36,
  backgroundColor: colors.grullo,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingHorizontal: 8,
};

export default StyleSheet.create({
  container: {
    marginHorizontal: margins.pageHorizontal,
    flexDirection: 'row',
    marginBottom: 12,
  },
  left: {
    flex: 5,
    ...commonContainer,
    marginRight: 8,
  },
  center: {
    flex: 2,
    ...commonContainer,
    justifyContent: 'center',
  },
  right: {
    ...commonContainer,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  removeIcon: {
    width: 36,
    height: 36,
  },
});
