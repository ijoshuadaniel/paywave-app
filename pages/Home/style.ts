import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const wrapperStyle = StyleSheet.create({
  data: {
    width: '49%',
    height: 180,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

const style = StyleSheet.create({
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
  iconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  icons: {
    width: 25,
    height: 25,
  },
  transferButton: {
    backgroundColor: colors.lightPurple,
    padding: 25,
    borderRadius: 10,
  },
  transferText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    fontWeight: '700',
    marginBottom: 10,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  infoOne: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  infoWrapperOne: {
    ...wrapperStyle.data,
    backgroundColor: colors.lightGreen,
  },
  infoWrapperTwo: {
    ...wrapperStyle.data,
    backgroundColor: colors.lightPurple,
  },
  infoWrapperThree: {
    ...wrapperStyle.data,
    backgroundColor: colors.lightPink,
  },
  infoWrapperFour: {
    ...wrapperStyle.data,
    backgroundColor: colors.lightYellow,
  },
  infoIcon: {
    width: '60%',
    height: '60%',
  },
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
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
});

export default style;
