import Toast from 'react-native-toast-message';

export const ErrorToast = (text: string) => {
  return Toast.show({
    type: 'error',
    text1: 'ERROR',
    text2: text,
  });
};

export const SuccessToast = (text: string) => {
  return Toast.show({
    type: 'success',
    text1: 'Success',
    text2: text,
  });
};
