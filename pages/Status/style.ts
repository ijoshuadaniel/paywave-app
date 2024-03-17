import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  screen: {
    width,
    height,
  },
  info: {
    height: height - 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  statusButton: {
    backgroundColor: colors.primary,
    marginHorizontal: 15,
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
  },
  statusButtonText: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default style;
