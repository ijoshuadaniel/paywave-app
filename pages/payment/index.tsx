import React, {useEffect} from 'react';
import {BackHandler, SafeAreaView, View} from 'react-native';
import WebView from 'react-native-webview';
import {apiUrl} from '../../utils/apiUrl';
import Axios from '../../utils/axios';
import style from './style';

const Payment = ({route, navigation}: any) => {
  const {orderId, data} = route.params;

  const handleBack = () => {
    console.log('back');
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
  }, []);

  const {url} = data.data;
  const getOrderDetails = async () => {
    const response = await Axios.post(apiUrl.getOrderDetails, {
      orderId,
    });
    if (response && response.status === 200) {
      if (response.data.order.status !== 'PENDING') {
        navigation.navigate('Status', {order: response.data.order});
        return true;
      }
      return false;
    }
    return false;
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const isOrderDone = await getOrderDetails();
      if (isOrderDone) {
        clearInterval(interval);
      }
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView>
      <View style={style.screen}>
        <WebView source={{uri: url}} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
