import {useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/Button';
import InputText from '../../components/Text';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import Axios from '../../utils/axios';
import {ErrorToast, SuccessToast} from '../../utils/toast';
import logo from './../../assets/logofull.png';
import style from './style';

const Otp = ({navigation}: any) => {
  const [otp, setOtp] = useState('');
  const {setLoading, setUser} = useContext(AppContext);
  const [seconds, setSeconds] = useState(90);
  const route = useRoute();
  const {email}: any = route.params;

  const login = async () => {
    const isOtp = otp !== '' && otp.length === 6;

    if (!isOtp) {
      return ErrorToast('Please enter valid otp');
    }
    setLoading(true);
    const response = await Axios.post('/login', {
      otp,
      email,
    });
    setLoading(false);
    if (response) {
      if (response.status === 200) {
        setUser(response.data.user);
        navigation.navigate('Home');
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const handleResend = async () => {
    setSeconds(90);
    SuccessToast('Opt Sent Successfully');
    await Axios.post('/sendOtp', {
      email,
    });
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <View style={style.background}>
        <View>
          <StatusBar backgroundColor={'#fff'} barStyle={'light-content'} />
          <SafeAreaView style={defaultStyle.pad}>
            <View style={style.headerWrapper}>
              <Image source={logo} style={style.logo} />
              <Text style={style.slogan}>
                Seamless Transfers, Limitless Convenience
              </Text>
              <Text style={style.sloganTwo}>Your Credit, Your Control</Text>
            </View>
            <InputText
              keyBoardType="number-pad"
              text="Enter Otp"
              onChange={setOtp}
              value={otp}
              maxLength={6}
            />
            <View style={style.resendOtp}>
              <Text>Resend OTP{seconds > 0 ? ` in ${seconds}s` : '?'}</Text>
              <TouchableOpacity
                onPress={() => (seconds <= 0 ? handleResend() : {})}>
                <Text
                  style={
                    seconds === 0
                      ? style.resendOtpText
                      : style.resendOtpNotEnabled
                  }>
                  Resend OTP
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
        <View style={style.buttonView}>
          <Button
            text="Login"
            textStyle={style.buttonText}
            buttonStyle={style.buttonStyle}
            onPress={login}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;
