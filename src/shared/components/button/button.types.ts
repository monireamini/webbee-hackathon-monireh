import {GestureResponderEvent} from 'react-native';

export interface buttonPropTypes {
  onPress: (event: GestureResponderEvent) => void;
  label: string;
  backgroundColor?: string;
  width?: string | number;
}
