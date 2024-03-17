import React from 'react';
import {Image, Text, View} from 'react-native';
import chip from '../../assets/icons/chip.png';
import {cardImage, cardTypes} from '../../utils/constants';
import {splitCC} from '../../utils/helpers';
import style from './style';

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

const Card = ({
  cardNumber,
  name,
  expiryMonth,
  expiryYear,
  cardtype,
}: cardObj) => {
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

  return (
    <View style={style.card}>
      <View style={style.cardTop}>
        <View style={style.cardType}>
          <Image source={getCardImage(cardtype)} style={style.cardTypeIcon} />
        </View>
        <View>
          <Image source={chip} style={style.cardTypeIcon} />
        </View>
        <View>
          <Text style={style.cardNumber}>{splitCC(cardNumber)}</Text>
        </View>
      </View>
      <View style={style.cardBottom}>
        <View style={style.cardContainer}>
          <Text style={style.cardContainerHead}>Card Holder Name</Text>
          <Text style={style.cardContainerName}>{name}</Text>
        </View>
        <View style={style.cardContainer}>
          <Text style={style.cardContainerHead}>Expiry</Text>
          <Text
            style={
              style.cardContainerText
            }>{`${expiryMonth}/${expiryYear}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
