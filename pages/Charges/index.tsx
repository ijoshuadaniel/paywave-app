import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {BannerAdSize} from 'react-native-google-mobile-ads';
import Button from '../../components/Button';
import Header from '../../components/Header';
import BannerAds from '../../components/bannerAds';
import SelectField from '../../components/select';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import {apiUrl} from '../../utils/apiUrl';
import Axios from '../../utils/axios';
import {transferType} from '../../utils/constants';
import style from './style';

const Charges = ({route, navigation}: any) => {
  const {setLoading, user} = useContext(AppContext);
  const [transferName, setTransferName] = useState(transferType[0].value);
  const [platformCharge, setPlatformCharge] = useState(0);
  const [standardCharges, setStandardCharges] = useState(0);
  const [instantCharges, setInstantCharges] = useState(0);
  const {card, beneficiary, CVV, note, amount} = route.params;

  const instantTransfer = 'Instant Transfer';

  const caluclateTransferCharges = () => {
    let charge = standardCharges;
    if (transferName === instantTransfer) {
      charge += instantCharges;
    }
    const totalAmount = Number(amount) + platformCharge + charge;
    return totalAmount;
  };

  const calculateFees = (
    standardCharge: number,
    instantCharge: number,
    platformFee: number,
  ) => {
    const totalAmount = Number(amount) + platformFee;
    const standard = Math.ceil((totalAmount * standardCharge) / 100);
    const instant = Math.ceil((totalAmount * instantCharge) / 100);
    return {standard, instant};
  };

  useEffect(() => {
    const getCharges = async () => {
      setLoading(true);
      const response = await Axios.get(apiUrl.getCharges);
      setLoading(false);
      if (response) {
        if (response.status === 200) {
          const {standardCharge, instantCharge, platformFee} = response.data;
          const {standard, instant} = calculateFees(
            standardCharge,
            instantCharge,
            platformFee,
          );
          setPlatformCharge(platformFee);
          setStandardCharges(standard);
          setInstantCharges(instant);
        }
      }
    };

    getCharges();
    caluclateTransferCharges();
  }, [setLoading]);

  useEffect(() => {
    caluclateTransferCharges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transferName]);

  const confirmAndPay = async () => {
    const data = {
      card,
      beneficiary,
      user,
      CVV,
      note,
      amount,
      platformCharge,
      standardCharges,
      instantCharges,
      transferType: transferName,
      totalAmount: caluclateTransferCharges(),
    };

    setLoading(true);
    const response = await Axios.post(apiUrl.pay, data);
    setLoading(false);
    if (response) {
      if (response.status === 200) {
        navigation.navigate('Payment', {...response.data});
      }
    }
  };

  return (
    <SafeAreaView style={defaultStyle.pad}>
      <View style={style.wrapper}>
        <Header text="Charges" onClick={() => navigation.navigate('Home')} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.inputWrapper}>
            <SelectField
              label="Choose transfer method"
              data={transferType}
              value={transferName}
              onChange={setTransferName}
            />
            <View style={style.charges}>
              <View style={style.chargesFlex}>
                <Text>Transfer Amount</Text>
                <Text>₹{amount}</Text>
              </View>
              <View style={style.chargesFlex}>
                <Text>Platform Fee</Text>
                <Text>₹{platformCharge}</Text>
              </View>
              <View style={style.chargesFlex}>
                <Text>Standard Charges</Text>
                <Text>₹{standardCharges}</Text>
              </View>
              {transferName === instantTransfer && (
                <View style={style.chargesFlex}>
                  <Text>Instant Charges</Text>
                  <Text>₹{instantCharges}</Text>
                </View>
              )}
              <View style={style.chargesTotal}>
                <Text style={style.chargesTotalText}>Total Amount</Text>
                <Text style={style.chargesTotalText}>
                  ₹{caluclateTransferCharges()}
                </Text>
              </View>
            </View>
          </View>
          <Text style={style.adText}>Ads</Text>
          <View style={style.adContainer}>
            <BannerAds size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
            <BannerAds size={BannerAdSize.MEDIUM_RECTANGLE} />
          </View>
        </ScrollView>
      </View>
      <Button
        text="Confirm and Pay"
        buttonStyle={style.addBeneficiaryButton}
        textStyle={style.addBeneficiaryText}
        onPress={() => confirmAndPay()}
      />
    </SafeAreaView>
  );
};

export default Charges;
