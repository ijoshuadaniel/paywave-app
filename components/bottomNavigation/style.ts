import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const style = StyleSheet.create({
  bottomNavigation: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 40,
  },
  bottomNavigationWrapper: {
    width: '95%',
    height: '100%',
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 40,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomNavigationIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },
});

export default style;
