import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  content: {
    width: width - 30,
    height: '80%',
  },
  cardWrapper: {},
  scrollView: {
    height: '90%',
    marginTop: 20,
  },
  btnView: {
    width: '100%',
    height: '20%',
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
  },
});

export default style;
