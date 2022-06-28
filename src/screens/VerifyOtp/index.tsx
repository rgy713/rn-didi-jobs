import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from '../../components/custom/CustomButton';
import Configs from '../../constants/Configs';
import {StackActions} from '@react-navigation/native';
import {MAP_DRAWER, PROFILE, VERIFY_OTP} from '../../constants/ScreensName';
import {setInAsyncStorage} from '../../utils';

type VerifyOtpNavProp = StackNavigationProp<RootStackParamList, 'VerifyOtp'>;

interface VerifyOtpProps {
  route: any;
}

const VerifyOtp = (props: VerifyOtpProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<VerifyOtpNavProp>();
  const {type, sendTo, nextScreen} = props.route.params;
  const [code, setCode] = useState<string>();

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const handleCodeChange = (val: any) => {
    setCode(val);
  };

  //TODO: FIX ME
  //Make sure verify by email or phone
  const checkOtp = (code: string) => {
    return code == '123456';
  };

  const goToNext = (code: string | undefined) => {
    if (code?.length === 6 && checkOtp(code)) {
      if (nextScreen === MAP_DRAWER) {
        setInAsyncStorage('login', true);
      } else {
        setInAsyncStorage('login', false);
      }
      if (nextScreen === PROFILE) {
        navigation.dispatch(StackActions.pop(2));
      } else {
        navigation.dispatch(StackActions.replace(nextScreen));
      }
    } else {
      // TODO
      setInAsyncStorage('login', false);
    }
  };

  const handleContinueBtnClick = () => {
    //TODO: FIX ME
    goToNext(code);
  };

  const onCodeFilled = (event: string) => {
    //TODO: FIX ME
    goToNext(event);
  };

  const handleResendCodeClick = () => [
    //TODO Fix me
    // Resend code
  ];

  return (
    <ScreenWrapperContainer
      handleLeftBtnPress={handleBackBtnPress}
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}>
      <View style={styles.container}>
        <Text style={styles.headingText}>
          {strings.Verify} {type}
        </Text>
        <Text style={styles.headingDescText}>
          {strings.WeSentACodeTo} {sendTo}
        </Text>
        <OTPInputView
          style={styles.optStyle}
          codeInputFieldStyle={styles.codeInputFieldStyle}
          pinCount={Configs.PinCount}
          onCodeChanged={handleCodeChange}
          autoFocusOnLoad={true}
          onCodeFilled={onCodeFilled}
        />
        <TouchableOpacity onPress={handleResendCodeClick}>
          <Text style={styles.resendCodeText}>{strings.ResendCode}</Text>
        </TouchableOpacity>
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

export default VerifyOtp;
