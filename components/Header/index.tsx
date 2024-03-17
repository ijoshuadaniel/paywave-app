import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import backIcon from '../../assets/icons/back.png';
import style from './style';

interface Header {
  text: string;
  onClick: () => void;
}

const Header = ({text, onClick}: Header) => {
  return (
    <View style={style.header}>
      <TouchableOpacity onPress={onClick}>
        <Image source={backIcon} style={style.backIcon} />
      </TouchableOpacity>
      <Text style={style.HeaderText}>{text}</Text>
    </View>
  );
};

export default Header;
