import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const width = Dimensions.get('screen').width - 35;

const style = StyleSheet.create({
  emptyCard: {
    backgroundColor: 'green',
    width,
    height: 210,
    marginVertical: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  emptyCardTop: {
    width: '100%',
    backgroundColor: colors.lightPurple,
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
  },
  emptyCardBottom: {
    width: '100%',
    backgroundColor: colors.primary,
    height: '30%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 5,
  },
  addIconWrapperBorder: {
    borderWidth: 1,
    padding: 20,
    borderStyle: 'dashed',
    borderCurve: 'circular',
    borderColor: colors.primary,
  },
  addIcon: {
    width: 32,
    height: 32,
  },
  emptyCardNumber: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 15,
    textAlign: 'center',
  },
});

export default style;
