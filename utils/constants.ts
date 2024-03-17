import {ImageSourcePropType} from 'react-native';
import masterCard from '../assets/icons/mastercard.png';
import rupayCard from '../assets/icons/rupay.png';
import visaCard from '../assets/icons/visa.png';

interface cardImage {
  Master: ImageSourcePropType;
  Visa: ImageSourcePropType;
  Rupay: ImageSourcePropType;
}

export const cardTypes = {
  masterCard: 'Master',
  visaCard: 'Visa',
  rupayCard: 'Rupay',
};

export const cardImage: cardImage = {
  Master: masterCard,
  Visa: visaCard,
  Rupay: rupayCard,
};

export const allCards = [
  {label: cardTypes.masterCard, value: cardTypes.masterCard},
  {label: cardTypes.visaCard, value: cardTypes.visaCard},
  {label: cardTypes.rupayCard, value: cardTypes.rupayCard},
];

export const transferType = [
  {label: 'Standard Transfer', value: 'Standard Transfer'},
  {label: 'Instant Transfer', value: 'Instant Transfer'},
];

export const expiryMonth = [
  {label: '01', value: '01'},
  {label: '02', value: '02'},
  {label: '03', value: '03'},
  {label: '04', value: '04'},
  {label: '05', value: '05'},
  {label: '06', value: '06'},
  {label: '07', value: '07'},
  {label: '08', value: '08'},
  {label: '09', value: '09'},
  {label: '10', value: '10'},
  {label: '11', value: '11'},
  {label: '12', value: '12'},
];

export const expiryYear = () => {
  const year = new Date().toLocaleDateString('en', {year: '2-digit'});
  const indexLength = 100 - Number(year);
  const allYears: object[] = [];
  for (let index = 0; index < indexLength; index++) {
    allYears.push({
      label: '20' + (Number(year) + Number(index)),
      value: '20' + (Number(year) + Number(index)),
    });
  }
  return allYears;
};
