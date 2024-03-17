import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import backIcon from '../../assets/icons/back.png';
import style from './style';

interface Header {
  text: string;
  onClick: () => void;
  button?: boolean;
  buttonText?: String;
  btnOnClick?: () => void;
}

const Header = ({
  text,
  onClick,
  button = false,
  buttonText,
  btnOnClick,
}: Header) => {
  return (
    <View style={style.wrapper}>
      <View style={style.header}>
        <TouchableOpacity onPress={onClick}>
          <Image source={backIcon} style={style.backIcon} />
        </TouchableOpacity>
        <Text style={style.HeaderText}>{text}</Text>
      </View>
      {button && (
        <TouchableOpacity style={style.buttonWrap} onPress={btnOnClick}>
          <Text style={style.save}>{buttonText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
