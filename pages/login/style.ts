import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  background: {
    width,
    height,
    backgroundColor: '#EBE5FE',
    display: 'flex',
  },
  content: {
    minHeight: '75%',
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
    width: '100%',
    padding: 15,
    paddingBottom: 20,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 20,
    marginTop: 30,
    marginBottom: 20,
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
