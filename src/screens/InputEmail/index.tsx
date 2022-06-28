import {StackActions, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomTextInput from '../../components/custom/CustomTextInput';
import EmailSuggest from '../../components/EmailSuggest';
import Configs from '../../constants/Configs';
import {
  INPUT_NAME,
  LOGIN,
  PROFILE,
  VERIFY_OTP,
} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import ValidateEmail from '../../helpers/validations/Email';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type InputEmailNavProp = StackNavigationProp<RootStackParamList, 'InputEmail'>;

interface InputEmailProps {
  route: any;
}

const InputEmail = (props: InputEmailProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<InputEmailNavProp>();
  const nextScreen: string = props.route?.params?.nextScreen;
  const [email, setEmail] = useState<string>();

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const handleContinueBtnClick = () => {
    if (ValidateEmail(email)) {
      if (nextScreen && nextScreen == PROFILE) {
        navigation.push(VERIFY_OTP, {
          type: strings.Email,
          sendTo: email,
          nextScreen: PROFILE,
        } as any);
      } else {
        navigation.push(VERIFY_OTP, {
          type: strings.Email,
          sendTo: email,
          nextScreen: INPUT_NAME,
        } as any);
      }
    }
  };

  const handleEmailChange = (event: any) => {
    setEmail(event);
  };

  const handleSuggestionClick = (value: string) => {
    if (email) {
      setEmail(email?.split('@')[0] + value);
    }
  };

  const renderEmailSuggest = () => {
    return Configs.SuggestEmailList.map(email => (
      <EmailSuggest
        email={email}
        styles={styles.suggestion}
        textStyles={styles.suggestText}
        handleSuggestionClick={handleSuggestionClick}
        key={email}
      />
    ));
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Email</Text>
        <Text style={styles.headingDescText}>{strings.WeSendYouEmailCode}</Text>
        <CustomTextInput
          inputStyle={styles.emailInputStyle}
          placeholder={strings.Emailaddress}
          handleChange={handleEmailChange}
          keyboardType={'email-address'}
          value={email}
          onSubmitEditing={handleContinueBtnClick}
          autoFocus={true}
        />
      </View>
      <View style={styles.container}>
        <CustomButton
          text={strings.Continue}
          style={styles.continueBtn}
          textStyle={styles.continueBtnText}
          handleClick={handleContinueBtnClick}
        />
        <View style={styles.suggestContainer}>{renderEmailSuggest()}</View>
      </View>
    </ScreenWrapperContainer>
  );
};

export default InputEmail;
