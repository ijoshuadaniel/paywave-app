import React, {useEffect, useMemo} from 'react';
import {
  Animated,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import style from './style';

interface sidemenu {
  navigation: any;
  hideSideBar: () => void;
}

const Sidemenu = ({navigation, hideSideBar}: sidemenu) => {
  const {navigate} = navigation;
  const position = useMemo(() => new Animated.ValueXY({x: -400, y: 0}), []);

  useEffect(() => {
    Animated.timing(position, {
      toValue: {x: 0, y: 0},
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [position]);

  const delayHideSidebar = () => {
    Animated.timing(position, {
      toValue: {x: -400, y: 0},
      duration: 400,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      hideSideBar();
    }, 410);
  };

  const navigateToPage = async (page: String) => {
    await delayHideSidebar();
    navigate(page, {transfer: false});
  };

  return (
    <View style={style.sidemenuContainer}>
      <Animated.View
        style={{...style.sidemenu, transform: [{translateX: position.x}]}}>
        <View style={style.header}>
          <View style={style.leftHead}>
            <View style={style.leftHeadIcon}>
              <Text style={style.leftHeadIconText}>D</Text>
              {/* <Text style={style.leftHeadIconText}>{user.name.charAt(0)}</Text> */}
            </View>
            <View style={style.RightHead}>
              <Text style={style.RightHeadUsername}>Daniel</Text>
              {/* <Text style={style.RightHeadUsername}>{user.name}</Text> */}
              <Text style={style.RightHeadWelcome}>Welcome Back</Text>
            </View>
          </View>
        </View>
        <View style={style.menulist}>
          <TouchableOpacity
            onPress={() => navigateToPage('Cards')}
            style={style.listItem}>
            <Text style={style.listItemText}>Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToPage('Beneficiary')}
            style={style.listItem}>
            <Text style={style.listItemText}>Beneficiary</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigateToPage('Home')}
            style={style.listItem}>
            <Text style={style.listItemText}>Profile</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => navigateToPage('Home')}
            style={style.listItem}>
            <Text style={style.listItemText}>Terms and Condition</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToPage('Home')}
            style={style.listItem}>
            <Text style={style.listItemText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <TouchableWithoutFeedback onPress={delayHideSidebar}>
        <View style={style.outerContainer} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Sidemenu;
