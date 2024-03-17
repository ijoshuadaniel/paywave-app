import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');
const style = StyleSheet.create({
  content: {
    width: width - 30,
    height: '86%',
  },
  wrapper: {},
  inputWrapper: {
    marginTop: 20,
  },
  charges: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  chargesFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  chargesTotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 20,
    marginTop: 10,
    borderTopWidth: 1,
  },
  btnView: {
    height: '20%',
  },
  addBeneficiaryText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  addBeneficiaryButton: {
    width: width - 30,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
  },
  chargesTotalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  adText: {
    marginTop: 20,
  },
  adContainer: {
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    marginTop: 5,
    padding: 5,
    borderRadius: 5,
    borderColor: colors.primary,
  },
});

export default style;
