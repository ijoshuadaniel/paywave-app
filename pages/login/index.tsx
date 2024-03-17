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
    const isPhone = phone !== '' && phone.length === 10;
    if (isPhone) {
      setLoading(true);
      const response = await Axios.post('/checkUser', {
        phone,
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
      ErrorToast('Please enter valid phone number.');
    }
  };

  const requestOtp = async () => {
    const isEmail = validateEmail(email);
    const isName = name !== '' && name.length >= 3;
    const isPhone = phone !== '' && phone.length === 10;

    if (!isPhone) {
      return ErrorToast('Please enter valid phone number.');
    }
    if (!userCheckDone) {
      if (!isName) {
        return ErrorToast('Please enter valid name.');
      } else if (!isEmail) {
        return ErrorToast('Please enter valid email.');
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
        navigation.navigate('Otp', {...response.data, name, email});
      }
    }
  };

  return (
    <SafeAreaView>
      <View style={style.background}>
        <View style={style.content}>
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
              text="Phone Number"
              onChange={showFields ? () => {} : setPhone}
              value={phone}
              maxLength={10}
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
                  keyBoardType="email-address"
                  text="Email"
                  onChange={setEmail}
                  value={email}
                />
              </>
            )}
          </SafeAreaView>
        </View>
        <View style={style.buttonView}>
          <Button
            text="NEXT"
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
