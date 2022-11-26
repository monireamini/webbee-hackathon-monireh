import {KeyboardTypeOptions} from 'react-native';

export interface inputPropTypes {
  value: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
}
