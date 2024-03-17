import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const {width, height} = Dimensions.get('screen');

const style = StyleSheet.create({
  transferBg: {
    width,
    height,
    backgroundColor: colors.lightPurple,
  },
  pad: {
    paddingHorizontal: 15,
  },
  transferTop: {
    width: width - 30,
    height: height - 100,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 50,
  },
  transferTopAmt: {},
  transferTopAmtText: {
    fontSize: 50,
    textAlign: 'center',
    color: colors.primary,
    marginBottom: 20,
  },
  transferTopAmtNote: {
    fontSize: 14,
    backgroundColor: colors.primary,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    textAlign: 'center',
    color: colors.white,
  },
  transferBottom: {
    position: 'absolute',
    width: width - 30,
    height: '30%',
    bottom: 0,
    margin: 15,
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 10,
  },
  transferBottomCard: {
    width: '100%',
    backgroundColor: colors.white,
    height: '50%',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  transferCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 5,
  },
  transferCardImg: {
    width: 32,
    height: 32,
  },
  transferCardText: {
    fontSize: 14,
    fontWeight: '700',
  },
  transferhead: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  transferText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  transferButton: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
  },
  transferCardInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  transferCardInfoText: {
    fontSize: 12,
  },
  transferCvv: {
    borderWidth: 0.5,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  transferFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transferPayTo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 15,
  },
  transferPayToText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: 'bold',
  },
  transferPayToName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  transferPayToNumber: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  transferCardChange: {
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
});

export default style;
