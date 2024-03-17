import React from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import style from './style';

interface InputText {
  keyBoardType: KeyboardTypeOptions;
  text: string;
  onChange?: any;
  value?: string;
  maxLength?: number;
}

const InputText = ({
  keyBoardType,
  text,
  value,
  onChange,
  maxLength = 32,
}: InputText) => {
  return (
    <View style={style.input}>
      <Text style={style.inputLabel}>{text}</Text>
      <View style={style.inputTxt}>
        <TextInput
          style={style.inputTxtField}
          keyboardAppearance="default"
          keyboardType={keyBoardType}
          placeholder={text}
          value={value}
          onChangeText={onChange}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
};

export default InputText;
