import {Dimensions} from 'react-native';

export const colors = {
  gunMetal: '#2A3443',
  morningBlue: '#839788',
  champagne: '#EEE0CB',
  grullo: '#BAA898',
  beauBlue: '#BFD7EA',
  white: '#FFF',
};

export const dimensions = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
};

export const textSize = {
  smallSizeText: {fontSize: 14},
  mediumSizeText: {fontSize: 16},
  bigSizeText: {fontSize: 24},
};

export const textWeight = {
  regular: {},
  bold: {fontWeight: 'bold'},
};

export const boldText = {
  fontSize: 14,
  fontWeight: 'bold',
  color: colors.xanadu,
};

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const rowCenter = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const margins = {
  pageHorizontal: 20,
  textVertical: 20,
};
