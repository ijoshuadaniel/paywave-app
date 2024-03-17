import React, {useContext, useState} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import Button from '../../components/Button';
import InputText from '../../components/Text';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import Axios from '../../utils/axios';
import {validateEmail} from '../../utils/helpers';
import {ErrorToast} from '../../utils/toast';
import logo from './../../assets/logofull.png';
import style from './style';

const Login = ({navigation}: any) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const {setLoading} = useContext(AppContext);
  const [showFields, setShowFields] = useState(false);

  let userCheckDone = false;

  const requestLogin = async () => {
    const isEmail = email !== '' && validateEmail(email);
    if (isEmail) {
      setLoading(true);
      const response = await Axios.post('/checkUser', {
        email,
      });
      setLoading(false);
      if (response) {
        setShowFields(response.data.showFields);
        if (!response.data.showFields) {
          userCheckDone = true;
          requestOtp();
        }
      }
    } else {
      ErrorToast('Please enter valid Email Address.');
    }
  };

  const requestOtp = async () => {
    const isEmail = validateEmail(email);
    const isName = name !== '' && name.length >= 3;
    const isPhone = phone !== '' && phone.length === 10;

    if (!isEmail) {
      return ErrorToast('Please enter valid email.');
    }
    if (!userCheckDone) {
      if (!isName) {
        return ErrorToast('Please enter valid name.');
      } else if (!isPhone) {
        return ErrorToast('Please enter valid phone.');
      }
    }
    setLoading(true);
    const response = await Axios.post('/sendOtp', {
      phone,
      name,
      email,
    });
    setLoading(false);
    if (response) {
      if (response.status === 200) {
        navigation.navigate('Otp', {...response.data, phone, name, email});
      }
    }
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
              keyBoardType="email-address"
              text="Email Address"
              value={email}
              onChange={showFields ? () => {} : setEmail}
            />
            {showFields && (
              <>
                <InputText
                  keyBoardType="default"
                  text="Name"
                  onChange={setName}
                  value={name}
                />
                <InputText
                  keyBoardType="number-pad"
                  text="Phone Number"
                  onChange={setPhone}
                  maxLength={10}
                  value={phone}
                />
              </>
            )}
          </SafeAreaView>
        </View>
        <View style={style.buttonView}>
          <Button
            text="Send OTP"
            textStyle={style.buttonText}
            buttonStyle={style.buttonStyle}
            onPress={showFields ? requestOtp : requestLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
