import {useIsFocused} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import closeIcon from '../../assets/icons/close.png';
import Button from '../../components/Button';
import Header from '../../components/Header';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import {apiUrl} from '../../utils/apiUrl';
import Axios from '../../utils/axios';
import {cardImage, cardTypes} from '../../utils/constants';
import {splitCC} from '../../utils/helpers';
import style from './style';

interface Cards {
  navigation: any;
  route: any;
}

interface cardObj {
  id: number;
  userId: string;
  cardId: string;
  cardNumber: string;
  name: string;
  expiryMonth: string;
  expiryYear: string;
  cardtype: string;
  cardBank: string;
}

const Cards = ({route, navigation}: Cards) => {
  const isFocused = useIsFocused();

  const {user, setLoading} = useContext(AppContext);
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState<any>({});
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const {transfer} = route.params;

  const getAllCards = async () => {
    setLoading(true);
    const response = await Axios.get(apiUrl.getCards + `/${user.userId}`);
    setLoading(false);
    if (response) {
      setData(response.data.card);
    }
  };
  useEffect(() => {
    getAllCards();
  }, [isFocused]);

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

  const handleOnPress = (cardObj: cardObj) => {
    if (transfer) {
      navigation.navigate('Transfer', {...route.params, card: cardObj});
    } else {
      setIsSheetVisible(true);
      setSelectedCard(cardObj);
    }
  };

  const handleDeleteCard = async (card: cardObj) => {
    setIsSheetVisible(false);
    setSelectedCard({});
    const response = await Axios.post(apiUrl.deleteCard, {...card});
    setLoading(true);
    if (response) {
      setLoading(false);
      setData(response.data.card);
    }
  };

  const handleCloseModal = () => {
    setIsSheetVisible(false);
    setSelectedCard({});
  };

  return (
    <SafeAreaView style={style.screen}>
      {isSheetVisible && (
        <View style={style.bottomSheet}>
          <View style={style.bottomSheetHeight}>
            <View style={style.bottomSheetFlex}>
              <Text style={style.bottomSheetHeader}>Card Details</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Image
                  source={closeIcon}
                  style={style.bottomSheetHeaderClose}
                />
              </TouchableOpacity>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Card Number</Text>
              <Text>{splitCC(selectedCard.cardNumber)}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Card Holder Name</Text>
              <Text>{splitCC(selectedCard.name)}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Card Expiry</Text>
              <Text
                style={
                  style.cardsAcc
                }>{`${selectedCard.expiryMonth}/${selectedCard.expiryYear}`}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Bank</Text>
              <Text style={style.cardsAcc}>{selectedCard.cardBank}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Card Type</Text>
              <Text style={style.cardsAcc}>{selectedCard.cardtype}</Text>
            </View>
          </View>
          <Button
            text="Delete Card"
            buttonStyle={style.delteButton}
            textStyle={style.addCardsButtonText}
            onPress={() => handleDeleteCard(selectedCard)}
          />
        </View>
      )}
      <View style={defaultStyle.pad}>
        <Header
          text={transfer ? 'Select Card' : 'All Cards'}
          onClick={() => navigation.navigate('Home')}
        />
        {!transfer && (
          <Button
            text="ADD Cards"
            buttonStyle={style.addCardsButton}
            textStyle={style.addCardsButtonText}
            onPress={() => navigation.navigate('AddCards')}
          />
        )}
        <View style={style.cards}>
          <ScrollView>
            {data &&
              data.length > 0 &&
              data.map((card: cardObj, i) => (
                <TouchableOpacity key={i} onPress={() => handleOnPress(card)}>
                  <View style={style.cardsListWrapper}>
                    <View style={style.cardsList}>
                      <Text style={style.cardsText}>
                        {splitCC(card.cardNumber)}
                      </Text>
                      <Text style={style.cardsAcc}>{card.name}</Text>
                      <Text
                        style={
                          style.cardsAcc
                        }>{`${card.expiryMonth}/${card.expiryYear}`}</Text>
                    </View>
                    <Image
                      source={getCardImage(card.cardtype)}
                      style={style.cardsListImg}
                    />
                  </View>
                </TouchableOpacity>
              ))}
            {data && data.length === 0 && (
              <View style={style.noCards}>
                <Text style={style.noCardsText}>No cards found.</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
