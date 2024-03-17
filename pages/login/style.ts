import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  background: {
    width,
    height: height,
    backgroundColor: '#EBE5FE',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 30,
  },
  logo: {
    width: 165,
    height: 30,
  },
  slogan: {
    marginTop: 30,
    textAlign: 'center',
  },
  sloganTwo: {
    marginTop: 10,
    textAlign: 'center',
  },
  buttonView: {
    padding: 15,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default style;
