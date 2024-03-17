import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import addIcon from '../../assets/icons/add.png';
import style from './style';

const EmptyCard = ({navigation}: any) => {
  return (
    <View style={style.emptyCard}>
      <View style={style.emptyCardTop}>
        <View style={style.addIconWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('AddCards')}>
            <View style={style.addIconWrapperBorder}>
              <Image source={addIcon} style={style.addIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={style.emptyCardNumber}>Add Your First Card</Text>
      </View>
      <View style={style.emptyCardBottom} />
    </View>
  );
};

export default EmptyCard;
