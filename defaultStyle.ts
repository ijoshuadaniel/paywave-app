import {Dimensions, StyleSheet} from 'react-native';
import colors from './utils/colors';

const {width, height} = Dimensions.get('screen');

const defaultStyle = StyleSheet.create({
  pad: {
    margin: 15,
    // marginTop: 30,
  },
  loader: {
    fontSize: 14,
    color: colors.white,
  },
  indicatorStyle: {
    margin: 0,
    padding: 0,
    width: '100%',
  },
  flexSpaceBtw: {
    height: 500,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default defaultStyle;
