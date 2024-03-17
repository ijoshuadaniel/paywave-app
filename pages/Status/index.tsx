import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import success from '../../assets/icons/check.png';
import failed from '../../assets/icons/cross.png';
import Button from '../../components/Button';
import defaultStyle from '../../defaultStyle';
import style from './style';

const Status = ({route, navigation}: any) => {
  const {order} = route.params;
  const icon = order.status === 'SUCCESS' ? success : failed;
  return (
    <SafeAreaView style={style.screen}>
      <View style={{...defaultStyle.pad, ...style.info}}>
        <Image source={icon} style={style.icon} />
        <Text style={style.text}>
          Transaction {order.status === 'SUCCESS' ? 'Success' : 'Failed'}
        </Text>
        <Text>{order.orderId}</Text>
      </View>
      <Button
        text="Back To Home"
        buttonStyle={style.statusButton}
        textStyle={style.statusButtonText}
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

export default Status;
