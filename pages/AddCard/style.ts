import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  cardWrapper: {
    height: height - 70,
  },
  scrollView: {
    height: height - 90,
    marginTop: 20,
    marginBottom: 100,
  },
  cardText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cardButton: {
    width: width - 30,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
  },
});

export default style;
