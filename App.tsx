import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import AppWrapper from './AppWrapper';
import AppContext from './context/context';
import colors from './utils/colors';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const initialValue = {
    loading,
    setLoading,
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={initialValue}>
      <NavigationContainer
        theme={{
          colors: {
            background: colors.screenBackground,
            primary: '',
            card: colors.screenBackground,
            text: 'black',
            border: colors.screenBackground,
            notification: colors.screenBackground,
          },
          dark: false,
        }}>
        <AppWrapper />
        <Toast />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
