import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  background: {
    width,
    height,
    backgroundColor: '#EBE5FE',
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
    position: 'absolute',
    width: '100%',
    bottom: 30,
    padding: 15,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 20,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  resendOtp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resendOtpText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  resendOtpNotEnabled: {
    color: 'grey',
  },
});

export default style;
