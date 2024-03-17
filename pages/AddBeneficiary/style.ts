import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  wrapper: {
    width: width - 30,
    height: height - 80,
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
    position: 'absolute',
    bottom: 0,
    flex: 1,
  },
});

export default style;
