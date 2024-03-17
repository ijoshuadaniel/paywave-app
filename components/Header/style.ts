import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
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
});

export default style;
