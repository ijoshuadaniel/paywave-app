import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import colors from '../../utils/colors';
import {cardImage, cardTypes} from '../../utils/constants';
import {splitCC} from '../../utils/helpers';
import {ErrorToast} from '../../utils/toast';
import style from './style';

const Transfer = ({route, navigation}: any) => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [CVV, setCVV] = useState('');
  const {card, beneficiary} = route.params;

  const getCardImage = (imageType: string) => {
    if (imageType === cardTypes.masterCard) {
      return cardImage.Master;
    } else if (imageType === cardTypes.visaCard) {
      return cardImage.Visa;
    } else if (imageType === cardTypes.rupayCard) {
      return cardImage.Rupay;
    } else {
      return cardImage.Master;
    }
  };
  const navigateToBeneficiary = () => {
    navigation.navigate('Beneficiary', {transfer: true});
  };

  const transferToCards = () => {
    navigation.navigate('Cards', {...route.params});
  };

  const handleSend = () => {
    const allFields = [amount, CVV];
    const isValid = allFields.every(
      f => f !== '' && f !== undefined && f !== null,
    );

    if (!isValid) {
      return ErrorToast('Please enr all the fields.');
    }

    if (Number(amount) <= 0) {
      return ErrorToast('Please enter corret amount.');
    }
    if (CVV.length !== 3) {
      return ErrorToast('Please enter corret CVV.');
    }

    navigation.navigate('Charges', {...route.params, CVV, amount, note});
  };

  return (
    <SafeAreaView style={style.transferBg}>
      <View style={style.pad}>
        <Header text="Transfer Money" onClick={() => transferToCards()} />
        <View style={style.transferTop}>
          <View style={style.transferTopAmt}>
            <View style={style.transferPayTo}>
              <Text style={style.transferPayToText}>Pay to</Text>
              <Text style={style.transferPayToName}>
                {beneficiary.beneficiaryName}
              </Text>
              <Text style={style.transferPayToNumber}>
                {beneficiary.beneficiaryAccountNumber}
              </Text>
              <TouchableOpacity onPress={() => navigateToBeneficiary()}>
                <Text style={style.transferCardChange}>Change Beneficiary</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="₹0"
              style={style.transferTopAmtText}
              keyboardType="phone-pad"
              maxLength={6}
              onChangeText={(text: any) => setAmount(text)}
              value={amount}
              placeholderTextColor={colors.primary}
            />
            <TextInput
              placeholder="Note"
              style={style.transferTopAmtNote}
              keyboardType="phone-pad"
              placeholderTextColor={colors.white}
              cursorColor={colors.white}
              contextMenuHidden={true}
              onChangeText={(text: any) => setNote(text)}
              value={note}
            />
          </View>
        </View>
        <View style={style.transferBottom}>
          <Text style={style.transferhead}>Choose card to pay with.</Text>
          <View style={style.transferBottomCard}>
            <View style={style.transferFlex}>
              <View>
                <View style={style.transferCard}>
                  <Image
                    source={getCardImage(card.cardType)}
                    style={style.transferCardImg}
                  />
                  <Text style={style.transferCardText}>
                    {splitCC(card.cardNumber)}
                  </Text>
                </View>
                <View style={style.transferCardInfo}>
                  <Text style={style.transferCardInfoText}>
                    {`${card.name}, ${card.expiryMonth}/${card.expiryYear}`}
                  </Text>
                </View>
              </View>
              <View>
                <TextInput
                  placeholder="CVV"
                  maxLength={3}
                  keyboardType="number-pad"
                  style={style.transferCvv}
                  onChangeText={(text: any) => setCVV(text)}
                  value={CVV}
                />
                <TouchableOpacity onPress={() => transferToCards()}>
                  <Text style={style.transferCardChange}>Change</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Button
            text="NEXT"
            textStyle={style.transferText}
            buttonStyle={style.transferButton}
            onPress={() => handleSend()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transfer;
