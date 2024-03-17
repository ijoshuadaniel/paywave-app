import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import colors from '../../utils/colors';
import style from './style';

interface SelectField {
  label: string;
  data: object[];
  value: string;
  onChange: any;
}

const SelectField = ({label, data, value, onChange}: SelectField) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={style.input}>
      <Text style={style.inputLabel}>{label}</Text>
      <Dropdown
        style={[style.dropdown, isFocus && {borderColor: colors.primary}]}
        placeholderStyle={style.placeholderStyle}
        selectedTextStyle={style.selectedTextStyle}
        inputSearchStyle={style.inputSearchStyle}
        iconStyle={style.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField={'label'}
        valueField="value"
        placeholder={!isFocus ? label : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => onChange(item.value)}
      />
    </View>
  );
};

export default SelectField;
