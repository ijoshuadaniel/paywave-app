import {StyleSheet} from 'react-native';
import colors from './utils/colors';

const defaultStyle = StyleSheet.create({
  pad: {
    margin: 15,
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
});

export default defaultStyle;
