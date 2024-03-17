import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext, useEffect} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import AppContext from './context/context';
import defaultStyle from './defaultStyle';
import AddBeneficiary from './pages/AddBeneficiary';
import AddCard from './pages/AddCard';
import Beneficiary from './pages/Beneficiary';
import Cards from './pages/Cards/';
import Charges from './pages/Charges';
import Home from './pages/Home/Index';
import Status from './pages/Status';
import Transactions from './pages/Transactions';
import Transfer from './pages/Transfer';
import Login from './pages/login';
import Otp from './pages/otp';
import Payment from './pages/payment';
import Axios from './utils/axios';

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  const context = useContext(AppContext);
  useEffect(() => {
    if (context.user.token) {
      Axios.defaults.headers.common.Authorization = context.user.token;
    }
  }, [context]);

  return (
    <>
      <Spinner
        visible={context.loading}
        textContent={'Loading'}
        textStyle={defaultStyle.loader}
        overlayColor="#00000080"
        size="large"
        animation="fade"
      />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Beneficiary" component={Beneficiary} />
        <Stack.Screen name="AddBeneficiary" component={AddBeneficiary} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="AddCards" component={AddCard} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Charges" component={Charges} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Transactions" component={Transactions} />
      </Stack.Navigator>
    </>
  );
};

export default AppWrapper;
