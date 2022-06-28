import React, {useState} from 'react';
import {StackActions, useNavigation, useTheme} from '@react-navigation/native';
import useStyles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {
  GET_STARTED,
  INPUT_EMAIL,
  MAP_DRAWER,
  PROFILE,
  VERIFY_OTP,
} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import {Text, View} from 'react-native';
import strings from '../../i18n';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../../components/custom/CustomButton';
import UserInfo from '../../stores/auth/UserInfo';

interface LoginProps {
  route: any;
}

type LogindNavProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = (props: LoginProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<LogindNavProp>();
  const nextScreen: string = props.route?.params?.nextScreen;
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const handleBackBtnClick = () => {
    navigation.goBack();
  };

  const handleContinueBtnClick = () => {
    if (phoneNumber && phoneNumber?.length > 9) {
      //TODO: FIX ME
      //check logined
      if (nextScreen && nextScreen == PROFILE) {
        navigation.push(VERIFY_OTP, {
          type: strings.Phone,
          sendTo: phoneNumber,
          nextScreen: PROFILE,
        } as any);
      } else {
        //TO DO
        // LOG IN CHECK
        const isLogined = phoneNumber == UserInfo.phoneNumber;
        if (isLogined) {
          // TODO
          navigation.navigate(VERIFY_OTP, {
            type: strings.Phone,
            sendTo: phoneNumber,
            nextScreen: MAP_DRAWER,
          } as any);
        } else {
          navigation.navigate(VERIFY_OTP, {
            type: strings.Phone,
            sendTo: phoneNumber,
            nextScreen: INPUT_EMAIL,
          } as any);
        }
      }
    }
  };

  const handlePhoneNumberChange = (val: string) => {
    setPhoneNumber(val);
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnClick}>
      <View style={styles.container}>
        <Text style={styles.headingText}>{strings.PhoneNumber}</Text>
        <Text style={styles.headingDescText}>{strings.WeSendYouPhoneCode}</Text>
        <PhoneInput
          autoFocus={true}
          defaultCode="US"
          layout="first"
          flagButtonStyle={styles.phoneNumberFlagBtn}
          containerStyle={styles.phoneNumberContainer}
          textContainerStyle={styles.phoneNumberText}
          disableArrowIcon={true}
          placeholder={strings.PhoneNumberPlaceholder}
          value={phoneNumber}
          textInputProps={{
            returnKeyType: 'done',
            onSubmitEditing: handleContinueBtnClick,
            maxLength: 10,
          }}
          onChangeFormattedText={(val: string) => handlePhoneNumberChange(val)}
        />
      </View>
      <View style={styles.container}>
        <CustomButton
          text={strings.Continue}
          style={styles.continueBtn}
          textStyle={styles.continueBtnText}
          handleClick={handleContinueBtnClick}
        />
      </View>
    </ScreenWrapperContainer>
  );
};

export default Login;
