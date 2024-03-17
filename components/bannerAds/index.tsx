import React from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';
import style from './style';

interface props {
  size: BannerAdSize;
}

const BannerAds = ({size}: props) => {
  return (
    <View style={style.margin}>
      <BannerAd
        size={size}
        unitId="ca-app-pub-5890405819189109/7146278100"
        onPaid={e => console.log('paid', e)}
        onAdFailedToLoad={error => {
          console.error('Advert failed to load: ', error);
        }}
      />
    </View>
  );
};

export default BannerAds;
