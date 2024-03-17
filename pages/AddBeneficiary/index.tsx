import React, {useContext, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header';
import InputText from '../../components/Text';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import Axios from '../../utils/axios';
import {ErrorToast, SuccessToast} from '../../utils/toast';
import style from './style';

interface AddBeneficiary {
  navigation: any;
}

const AddBeneficiary = ({navigation}: AddBeneficiary) => {
  const [accountNo, setAccountNo] = useState('');
  const [confirmAccountNo, setConfirmAccountNo] = useState('');
  const [name, setName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const {setLoading, user} = useContext(AppContext);

  const validateAndAddBeneificary = async () => {
    const allFields = [accountNo, confirmAccountNo, ifscCode, name];
    const isValid = allFields.every(
      f => f !== '' && f !== undefined && f !== null,
    );
    if (!isValid) {
      return ErrorToast('Please enter all the fields.');
    }
    if (accountNo !== confirmAccountNo) {
      return ErrorToast('Account number dose not match.');
    }
    if (ifscCode.length !== 11) {
      return ErrorToast('Please enter valid ifsc code.');
    }
    // setLoading(true);
    const response = await Axios.post('/auth/addBeneficiary', {
      accountNo,
      confirmAccountNo,
      ifscCode,
      name,
      userId: user.userId,
    });
    setLoading(false);
    if (response) {
      if (response.status === 200) {
        SuccessToast(response.data.msg);
        setTimeout(() => {
          navigation.navigate('Beneficiary', {transfer: false});
        }, 1000);
      }
    }
  };

  return (
    <SafeAreaView style={defaultStyle.pad}>
      <View style={style.wrapper}>
        <Header
          text="Add Beneficiary"
          onClick={() => navigation.navigate('Home')}
          button={true}
          buttonText={'SAVE'}
          btnOnClick={validateAndAddBeneificary}
        />
        <View style={style.inputWrapper}>
          <InputText
            keyBoardType="number-pad"
            text="Account Number"
            onChange={setAccountNo}
            value={accountNo}
          />
          <InputText
            keyBoardType="number-pad"
            text="Confirm Account Number"
            onChange={setConfirmAccountNo}
            value={confirmAccountNo}
          />
          <InputText
            keyBoardType="default"
            text="Account Holder Name"
            onChange={setName}
            value={name}
          />
          <InputText
            keyBoardType="default"
            text="IFSC Code"
            onChange={setIfscCode}
            value={ifscCode}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddBeneficiary;
