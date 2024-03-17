import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {height} = Dimensions.get('screen');

const style = StyleSheet.create({
  beneficiary: {
    marginTop: 20,
  },
  screen: {
    height,
  },
  beneficiaryList: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderColor: colors.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  beneficiaryText: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '700',
  },
  beneficiaryAcc: {
    fontSize: 14,
    marginBottom: 2,
    fontWeight: '400',
  },
  beneficiaryBank: {
    fontSize: 12,
    marginBottom: 2,
    fontWeight: '400',
  },
  addBeneficaryButton: {
    backgroundColor: colors.primary,
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
  },
  addBeneficaryButtonText: {
    color: colors.white,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  noCards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height / 2 + 100,
  },
  selectButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  selectButtonText: {
    color: colors.white,
  },
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
