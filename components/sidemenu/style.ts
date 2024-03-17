import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  sidemenuContainer: {
    display: 'flex',
    zIndex: 1,
  },
  sidemenu: {
    position: 'absolute',
    height,
    backgroundColor: colors.lightPurple,
    zIndex: 1,
    width: width / 1.5,
    padding: 15,
    paddingVertical: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leftHeadIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftHeadIconText: {
    color: colors.white,
    textTransform: 'uppercase',
  },
  RightHead: {},
  RightHeadUsername: {
    fontSize: 18,
  },
  RightHeadWelcome: {
    fontSize: 12,
  },
  outerContainer: {
    width: '100%',
    height,
    position: 'absolute',
    right: 0,
  },
  menulist: {
    marginVertical: 20,
  },
  listItem: {
    marginVertical: 8,
    padding: 10,
  },
  listItemText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default style;
