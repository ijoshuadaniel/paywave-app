import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {height} = Dimensions.get('screen');

const style = StyleSheet.create({
  transactionHead: {
    paddingHorizontal: 15,
  },
  transaction: {
    marginTop: 20,
  },
  screen: {
    height,
  },
  transactionList: {
    marginBottom: 10,
  },
  transactionText: {
    marginBottom: 5,
    fontSize: 12,
  },
  transactionAcc: {
    fontSize: 10,
    marginBottom: 2,
    fontWeight: '400',
  },
  transactionStatus: {
    width: 60,
  },

  addTransactionButton: {
    backgroundColor: colors.primary,
    padding: 15,
    marginTop: 30,
    marginBottom: 5,
    borderRadius: 10,
  },
  addTransactionButtonText: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  transactionListWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    paddingVertical: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  transactionListImg: {
    width: 40,
    height: 40,
  },
  noTransaction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height / 2 + 100,
  },
  noTransactionText: {},
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: colors.white,
    width: '100%',
    height: '45%',
    zIndex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 15,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  bottomSheetHeight: {
    height: '65%',
  },
  bottomSheetHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomSheetFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  delteButton: {
    backgroundColor: 'red',
    padding: 15,
    marginTop: 30,
    marginBottom: 5,
    borderRadius: 10,
  },
  bottomSheetHeaderClose: {
    width: 12,
    height: 12,
  },
});

export default style;
