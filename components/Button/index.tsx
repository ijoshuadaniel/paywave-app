import React from 'react';
import {Image, ImageProps, Text, TouchableOpacity, View} from 'react-native';

interface Button {
  buttonStyle: Object;
  textStyle: Object;
  text: string;
  isIcon?: boolean;
  iconSource?: ImageProps;
  onPress: () => void;
}
const Button = ({
  buttonStyle,
  textStyle,
  text,
  isIcon,
  iconSource,
  onPress,
}: Button) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyle}>
        {isIcon && iconSource && <Image source={iconSource} />}
        <Text style={textStyle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
