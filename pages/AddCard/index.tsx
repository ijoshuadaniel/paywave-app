import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import InputText from '../../components/Text';
import SelectField from '../../components/select';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import Axios from '../../utils/axios';
import {allCards, expiryMonth, expiryYear} from '../../utils/constants';
import {allBanks, checkExpiry, validateCardNumber} from '../../utils/helpers';
import {ErrorToast, SuccessToast} from '../../utils/toast';
import style from './style';

const AddCard = ({navigation}: any) => {
  const [cardNo, setCardNo] = useState('');
  const [cardName, setCardName] = useState('');
  const [bank, setBank] = useState('');
  const [cardType, setCardType] = useState('');
  const [expiryMonthValue, setExpiryMonthValue] = useState('');
  const [expiryYearValue, setExpiryYearValue] = useState('');
  const {setLoading, user} = useContext(AppContext);

  const validateFields = async () => {
    const allFields = [
      cardNo,
      cardName,
      bank,
      cardType,
      expiryMonthValue,
      expiryYearValue,
    ];
    const isValid = allFields.every(
      f => f !== '' && f !== undefined && f !== null,
    );
    if (!isValid) {
      return ErrorToast('Please enter all the fields.');
    }

    if (!validateCardNumber(cardNo)) {
      return ErrorToast('Please enter valid card number.');
    }
    if (!checkExpiry(expiryMonthValue, expiryYearValue)) {
      return ErrorToast('Card expired');
    }
    setLoading(true);
    const response = await Axios.post('/auth/addCard', {
      cardNo,
      cardName,
      bank,
      cardType,
      expiryMonthValue,
      expiryYearValue,
      userId: user.userId,
    });
    setLoading(false);
    if (response) {
      if (response.status === 200) {
        SuccessToast(response.data.msg);
        setTimeout(() => {
          navigation.navigate('Cards', {transfer: false});
        }, 1000);
      }
    }
  };

  return (
    <>
      <SafeAreaView style={defaultStyle.pad}>
        <Header text="Add Card" onClick={() => navigation.navigate('Home')} />
        <View style={style.cardWrapper}>
          <ScrollView
            style={style.scrollView}
            showsHorizontalScrollIndicator={true}>
            <InputText
              keyBoardType="number-pad"
              text="Card Number"
              value={cardNo}
              onChange={setCardNo}
            />
            <InputText
              keyBoardType="default"
              text="Card Holder Name"
              value={cardName}
              onChange={setCardName}
            />
            <SelectField
              label="Select Bank"
              data={allBanks()}
              value={bank}
              onChange={setBank}
            />
            <SelectField
              label="Card Type"
              data={allCards}
              value={cardType}
              onChange={setCardType}
            />
            <SelectField
              label="Exipry Month"
              data={expiryMonth}
              value={expiryMonthValue}
              onChange={setExpiryMonthValue}
            />
            <SelectField
              label="Expiry Year"
              data={expiryYear()}
              value={expiryYearValue}
              onChange={setExpiryYearValue}
            />
          </ScrollView>
        </View>
        <Button
          text="Add Card"
          textStyle={style.cardText}
          buttonStyle={style.cardButton}
          onPress={() => validateFields()}
        />
      </SafeAreaView>
    </>
  );
};

export default AddCard;
