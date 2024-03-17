import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  HeaderText: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    letterSpacing: 0.7,
  },
  buttonWrap: {
    backgroundColor: colors.primary,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  save: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 12,
  },
});

export default style;
