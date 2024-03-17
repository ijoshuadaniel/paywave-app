import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  wrapper: {
    width: width - 30,
    height: '88%',
  },
  inputWrapper: {
    marginTop: 20,
  },
  addBeneficiaryText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  addBeneficiaryButton: {
    width: width - 30,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
});

export default style;
