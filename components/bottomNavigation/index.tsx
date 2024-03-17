import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import homeIconSelected from '../../assets/icons/home-selected.png';
import homeIcon from '../../assets/icons/home.png';
import sendIconSelected from '../../assets/icons/send-selected.png';
import sendIcon from '../../assets/icons/send.png';
import settingsIconSelected from '../../assets/icons/settings-selected.png';
import settingsIcon from '../../assets/icons/settings.png';
import style from './style';

const BottomNavigation = () => {
  const route = useRoute();
  let iconHome = homeIcon;
  let iconSend = sendIcon;
  let iconSettings = settingsIcon;
  if (route.name === 'Home') {
    iconHome = homeIconSelected;
  } else if (route.name === 'Transfer') {
    iconSend === sendIconSelected;
  } else if (route.name === 'Settings') {
    iconSettings = settingsIconSelected;
  }

  return (
    <View style={style.bottomNavigation}>
      <View style={style.bottomNavigationWrapper}>
        <Image style={style.bottomNavigationIcon} source={iconHome} />
        <Image style={style.bottomNavigationIcon} source={iconSend} />
        <Image style={style.bottomNavigationIcon} source={iconSettings} />
      </View>
    </View>
  );
};

export default BottomNavigation;
