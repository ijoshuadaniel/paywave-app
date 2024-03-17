import {useIsFocused} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import closeIcon from '../../assets/icons/close.png';
import Header from '../../components/Header';
import AppContext from '../../context/context';
import {apiUrl} from '../../utils/apiUrl';
import Axios from '../../utils/axios';
import {splitCC} from '../../utils/helpers';
import style from './style';

interface trans {
  navigation: any;
  route: any;
}

interface transObj {
  id: number;
  orderId: string;
  userId: string;
  cardId: string;
  cardNumber: string;
  beneficiaryName: string;
  status: string;
  amount: string;
  standardCharge: string;
  platformFee: string;
  instantCharge: string;
  totalAmount: string;
}

const Transactions = ({navigation}: trans) => {
  const isFocused = useIsFocused();
  const {user, setLoading} = useContext(AppContext);
  const [data, setData] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState<any>({});
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const getAllCards = async () => {
    setLoading(true);
    const response = await Axios.post(apiUrl.getAllOrder, {
      userId: user.userId,
    });
    setLoading(false);
    if (response) {
      setData(response.data.order);
    }
  };
  useEffect(() => {
    getAllCards();
  }, [isFocused]);

  const handleCloseModal = () => {
    setIsSheetVisible(false);
    setSelectedTransaction({});
  };

  const handleOnPress = (transObj: transObj) => {
    setIsSheetVisible(true);
    setSelectedTransaction(transObj);
  };

  const getAmountStyle = (transaction: transObj, style: any) => {
    let trans: any = {...style};
    if (transaction.status === 'PENDING') {
      trans = {...trans, color: 'blue'};
    } else if (transaction.status === 'SUCCESS') {
      trans = {...trans, color: 'green'};
    } else if (transaction.status === 'FAILED') {
      trans = {...trans, color: 'red'};
    } else {
      trans = {...trans, color: 'black'};
    }
    return trans;
  };

  return (
    <SafeAreaView style={style.screen}>
      {isSheetVisible && (
        <View style={style.bottomSheet}>
          <View style={style.bottomSheetHeight}>
            <View style={style.bottomSheetFlex}>
              <Text style={style.bottomSheetHeader}>Transaction Details</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Image
                  source={closeIcon}
                  style={style.bottomSheetHeaderClose}
                />
              </TouchableOpacity>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Transaction id</Text>
              <Text>{splitCC(selectedTransaction.orderId)}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Card Number</Text>
              <Text>{splitCC(selectedTransaction.cardNumber)}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Beneficiary Name</Text>
              <Text>{selectedTransaction.beneficiaryName}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Transaction Status</Text>
              <Text>{selectedTransaction.status}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Amount</Text>
              <Text>₹{selectedTransaction.amount}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Platform Fee</Text>
              <Text>₹{selectedTransaction.platformFee}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Standard Charge</Text>
              <Text>₹{selectedTransaction.standardCharge}</Text>
            </View>
            {selectedTransaction.transferType === 'Instant Transfer' && (
              <View style={style.bottomSheetFlex}>
                <Text>Instant Charge</Text>
                <Text>₹{selectedTransaction.instantCharges}</Text>
              </View>
            )}
            <View style={style.bottomSheetFlex}>
              <Text>Total Amount</Text>
              <Text>₹{selectedTransaction.totalAmount}</Text>
            </View>
          </View>
        </View>
      )}
      <View style={style.transactionHead}>
        <Header
          text="Transactions"
          onClick={() => navigation.navigate('Home')}
        />
        <View style={style.transaction}>
          <ScrollView>
            {data &&
              data.length > 0 &&
              data.map((card: transObj, i) => (
                <TouchableOpacity key={i} onPress={() => handleOnPress(card)}>
                  <View style={style.transactionListWrapper}>
                    <View style={style.transactionList}>
                      <Text style={style.transactionText}>
                        {splitCC(card.cardNumber)}
                      </Text>
                      <Text style={style.transactionText}>
                        {splitCC(card.beneficiaryName)}
                      </Text>
                      <Text style={getAmountStyle(card, style.transactionAcc)}>
                        {card.status}
                      </Text>
                    </View>
                    <Text style={getAmountStyle(card, style.transactionText)}>
                      ₹{card.totalAmount}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            {data && data.length === 0 && (
              <View style={style.noTransaction}>
                <Text style={style.noTransactionText}>
                  No Transactions found.
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
