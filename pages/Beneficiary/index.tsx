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
import Button from '../../components/Button';
import Header from '../../components/Header';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import {apiUrl} from '../../utils/apiUrl';
import Axios from '../../utils/axios';
import style from './style';

interface Beneficiary {
  navigation: any;
  route: any;
}

interface bene {
  userId: string;
  beneficiaryId: string;
  beneficiaryAccountNumber: string;
  beneficiaryConfirmAccountNumber: string;
  beneficiaryName: string;
  ifscCode: string;
}

const Beneficiary = ({route, navigation}: Beneficiary) => {
  const isFocused = useIsFocused();
  const {user, setLoading} = useContext(AppContext);
  const [data, setData] = useState([]);
  const {transfer} = route.params;
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<any>({});

  useEffect(() => {
    const getAllBeneficiary = async () => {
      setLoading(true);
      const response = await Axios.get(
        apiUrl.getBeneficiary + `/${user.userId}`,
      );
      setLoading(false);
      if (response) {
        setData(response.data.beneficiary);
      }
    };
    getAllBeneficiary();
  }, [setLoading, user, isFocused]);

  const handleTransfer = (bene: bene) => {
    if (transfer) {
      navigation.navigate('Cards', {...route.params, beneficiary: bene});
    } else {
      setSelectedBeneficiary(bene);
      setIsSheetVisible(true);
    }
  };

  const handleDeleteCard = async (beneificary: bene) => {
    setIsSheetVisible(false);
    setSelectedBeneficiary({});
    const response = await Axios.post(apiUrl.deleteBenenficiay, {
      ...beneificary,
    });
    setLoading(true);
    if (response) {
      setLoading(false);
      setData(response.data.beneficiary);
    }
  };

  const handleCloseModal = () => {
    setIsSheetVisible(false);
    setSelectedBeneficiary({});
  };

  return (
    <SafeAreaView style={style.screen}>
      {isSheetVisible && (
        <View style={style.bottomSheet}>
          <View style={style.bottomSheetHeight}>
            <View style={style.bottomSheetFlex}>
              <Text style={style.bottomSheetHeader}>Beneficiary Details</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Image
                  source={closeIcon}
                  style={style.bottomSheetHeaderClose}
                />
              </TouchableOpacity>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Bank Account No.</Text>
              <Text>{selectedBeneficiary.beneficiaryAccountNumber}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>Bank Account Holder Name</Text>
              <Text>{selectedBeneficiary.beneficiaryName}</Text>
            </View>
            <View style={style.bottomSheetFlex}>
              <Text>ISFC Code</Text>
              <Text>{selectedBeneficiary.ifscCode}</Text>
            </View>
          </View>
          <Button
            text="Delete Beneficiary"
            buttonStyle={style.delteButton}
            textStyle={style.addBeneficaryButtonText}
            onPress={() => handleDeleteCard(selectedBeneficiary)}
          />
        </View>
      )}
      <View style={defaultStyle.pad}>
        <Header
          text={transfer ? 'Select Beneficiary' : 'All Beneficiary'}
          onClick={() => navigation.navigate('Home')}
        />
        {!transfer && (
          <Button
            text="ADD Beneficiary"
            buttonStyle={style.addBeneficaryButton}
            textStyle={style.addBeneficaryButtonText}
            onPress={() => navigation.navigate('AddBeneficiary')}
          />
        )}
        {data && data.length > 0 && (
          <View style={style.beneficiary}>
            <ScrollView>
              {data.map((bene: bene, i) => (
                <TouchableOpacity key={i} onPress={() => handleTransfer(bene)}>
                  <View style={style.beneficiaryList}>
                    <View>
                      <Text style={style.beneficiaryText}>
                        {bene.beneficiaryName}
                      </Text>
                      <Text style={style.beneficiaryAcc}>
                        {bene.beneficiaryAccountNumber}
                      </Text>
                    </View>
                    <Text style={style.beneficiaryIfsc}>{bene.ifscCode}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        {data && data.length === 0 && (
          <View style={style.noCards}>
            <Text>No beneficiary found.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Beneficiary;
