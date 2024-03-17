import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  input: {
    marginVertical: 10,
  },
  inputLabel: {
    marginBottom: 10,
  },
  inputTxt: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: colors.primary,
  },
  inputTxtField: {
    width: '100%',
    height: '100%',
  },
});

export default style;
