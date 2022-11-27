import {Dimensions} from 'react-native';

export const colors = {
  gunMetal: '#2A3443',
  morningBlue: '#839788',
  champagne: '#EEE0CB',
  grullo: '#BAA898',
  beauBlue: '#BFD7EA',
  white: '#FFF',
  error: '#FE5656',
  disabled: '#C2C2C2',
};

export const dimensions = {
  windowWidth: Dimensions.get('screen').width,
  windowHeight: Dimensions.get('screen').height,
};

export const numColumns = dimensions.windowWidth < 460 ? 1 : 2;

export const textSize = {
  smallSizeText: {fontSize: 14},
  mediumSizeText: {fontSize: 16},
  bigSizeText: {fontSize: 24},
};

export const textWeight = {
  regular: {},
  bold: {fontWeight: 'bold'},
};

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const margins = {
  pageHorizontal: 20,
  textVertical: 20,
  formVertical: 20,
};
