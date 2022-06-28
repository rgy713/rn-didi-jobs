import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import FadeInView from '../../components/animate/FadeInView';
import CustomButton from '../../components/custom/CustomButton';
import {LOGIN, MAP_DRAWER} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import i18n from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {getFromAsyncStorage} from '../../utils';
import useStyles from './styles';

type GetStartedNavProp = StackNavigationProp<RootStackParamList>;

export const GetStarted = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<GetStartedNavProp>();
  const [login, setLogin] = useState(false);

  const getLoginInfo = async () => {
    const login = await getFromAsyncStorage('login');
    setLogin(login);
  };

  useEffect(() => {
    getLoginInfo();
    console.log(login);
  }, []);

  const handleGetStartBtnClick = () => {
    // TODO Fix me
    // Check already logined
    // if (login) {
    //   navigation.navigate(MAP_DRAWER);
    // } else {
    navigation.navigate(LOGIN);
    // }
  };

  return (
    <ScreenWrapperContainer
      isHeader={false}
      mainContainerStyle={styles.mainContainer}>
      <FadeInView duration={3000} style={{flex: 1}}>
        <View style={styles.container}>
          <Image
            style={styles.logoImg}
            source={require('../../assets/images/Logo.png')}
          />
        </View>
        <View style={styles.container}>
          <CustomButton
            text={i18n.GetStarted}
            style={styles.getStartBtn}
            textStyle={styles.getStartBtnText}
            handleClick={handleGetStartBtnClick}
          />
        </View>
      </FadeInView>
    </ScreenWrapperContainer>
  );
};

export default GetStarted;
