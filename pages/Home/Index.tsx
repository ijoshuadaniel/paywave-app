import {useIsFocused} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BannerAdSize} from 'react-native-google-mobile-ads';
import transactionsIcon from '../../assets/icons/bill.png';
import anytime from '../../assets/images/anytime.png';
import instantTransfer from '../../assets/images/instant.png';
import lowest from '../../assets/images/lowest.png';
import highSecurity from '../../assets/images/security.png';
import Button from '../../components/Button';
import BannerAds from '../../components/bannerAds';
import Card from '../../components/card';
import EmptyCard from '../../components/emptyCard';
import Sidemenu from '../../components/sidemenu';
import AppContext from '../../context/context';
import defaultStyle from '../../defaultStyle';
import {apiUrl} from '../../utils/apiUrl';
import Axios from '../../utils/axios';
import {ErrorToast} from '../../utils/toast';
import style from './style';

interface cardObj {
  id: number;
  userId: string;
  cardId: string;
  cardNumber: string;
  name: string;
  expiryMonth: string;
  expiryYear: string;
  cardtype: string;
  cardBank: string;
}

const Home = ({navigation}: any) => {
  const isFocused = useIsFocused();
  const [showMenu, SetShowMenu] = useState(false);

  const {user, setLoading} = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllCards = async () => {
      setLoading(true);
      const response = await Axios.get(apiUrl.getCards + `/${user.userId}`);

      if (response) {
        setLoading(false);
        setData(response.data.card);
      }
    };
    getAllCards();
  }, [setLoading, user, isFocused]);

  const showSideBar = () => {
    SetShowMenu(true);
  };

  const hideSideBar = () => {
    SetShowMenu(false);
  };

  const transfer = () => {
    if (data.length > 0) {
      navigation.navigate('Beneficiary', {transfer: true});
    } else {
      ErrorToast('Please add atleast one card.');
    }
  };

  return (
    <>
      {showMenu && (
        <Sidemenu navigation={navigation} hideSideBar={hideSideBar} />
      )}
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <SafeAreaView style={defaultStyle.pad}>
        <View style={style.header}>
          <View style={style.leftHead}>
            <TouchableOpacity style={style.leftHeadIcon} onPress={showSideBar}>
              <Text style={style.leftHeadIconText}>D</Text>
              {/* <Text style={style.leftHeadIconText}>{user.name.charAt(0)}</Text> */}
            </TouchableOpacity>
            <View style={style.RightHead}>
              <Text style={style.RightHeadUsername}>Daniel</Text>
              {/* <Text style={style.RightHeadUsername}>{user.name}</Text> */}
              <Text style={style.RightHeadWelcome}>Welcome Back</Text>
            </View>
          </View>
          <View style={style.iconWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transactions')}>
              <Image source={transactionsIcon} style={style.icons} />
            </TouchableOpacity>
            {/* <Image source={NotificationIcon} style={style.icons} /> */}
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data &&
              data.length > 0 &&
              data.map((c: cardObj, i) => <Card key={i} {...c} />)}
            {data && data.length <= 0 && <EmptyCard navigation={navigation} />}
          </ScrollView>

          <Button
            textStyle={style.transferText}
            buttonStyle={style.transferButton}
            text="Transfer to Bank"
            onPress={transfer}
          />
          <BannerAds size={BannerAdSize.FULL_BANNER} />
          <View style={style.info}>
            <View style={style.infoWrapperOne}>
              <Text style={style.infoText}>Instant Transfer</Text>
              <Image style={style.infoIcon} source={instantTransfer} />
            </View>
            <View style={style.infoWrapperTwo}>
              <Text style={style.infoText}>High Security</Text>
              <Image style={style.infoIcon} source={highSecurity} />
            </View>
          </View>
          <View style={style.infoOne}>
            <View style={style.infoWrapperThree}>
              <Text style={style.infoText}>Lowest Fees</Text>
              <Image style={style.infoIcon} source={lowest} />
            </View>
            <View style={style.infoWrapperFour}>
              <Text style={style.infoText}>Transfer Anytime</Text>
              <Image style={style.infoIcon} source={anytime} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
