import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const width = Dimensions.get('screen').width - 35;

const style = StyleSheet.create({
  card: {
    backgroundColor: 'green',
    width,
    height: 210,
    marginVertical: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  cardTop: {
    width: '100%',
    backgroundColor: colors.lightPurple,
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 15,
  },
  cardBottom: {
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
  cardType: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  cardTypeIcon: {
    width: 35,
    height: 35,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
  },
  cardContainer: {},
  cardContainerHead: {
    fontSize: 13,
    color: colors.white,
    fontWeight: '600',
    marginBottom: 5,
  },
  cardContainerName: {
    fontSize: 10,
    color: colors.white,
  },
  cardContainerText: {
    fontSize: 11,
    color: colors.white,
    textAlign: 'center',
  },
});

export default style;
