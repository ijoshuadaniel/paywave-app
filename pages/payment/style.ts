import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('screen');

const style = StyleSheet.create({
  screen: {
    height,
  },
});

export default style;
