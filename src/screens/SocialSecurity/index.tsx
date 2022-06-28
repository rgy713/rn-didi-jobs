import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Alert, Image, Text, TextInput, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomTextInput from '../../components/custom/CustomTextInput';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type SocialSecurityNavProps = StackNavigationProp<
  RootStackParamList,
  'SocialSecurity'
>;

const SocialSecurity = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const {task, handleUpdateStepData} = props.route.params;
  const navigation = useNavigation<SocialSecurityNavProps>();
  const field1Ref: MutableRefObject<TextInput | null | undefined> = useRef();
  const field2Ref: MutableRefObject<TextInput | null | undefined> = useRef();
  const field3Ref: MutableRefObject<TextInput | null | undefined> = useRef();

  const [firstField, setFirstField] = useState('');
  const [secondField, setSecondField] = useState('');
  const [thirdField, setThirdField] = useState('');

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const setItemInAsyncStorage = async () => {
    if (task && task.value1) {
      const arr = task.value1.split('-');
      setFirstField(arr[0]);
      setSecondField(arr[1]);
      setThirdField(arr[2]);
    }
  };

  useEffect(() => {
    setItemInAsyncStorage();
  }, []);

  const handleConfirmClick = () => {
    if (
      firstField.toString().length === 3 &&
      secondField.toString().length === 2 &&
      thirdField.toString().length === 4
    ) {
      // TODO Fix me
      task.value1 = [firstField, secondField, thirdField].join('-');
      task.status = 1;
      handleUpdateStepData(task);
      navigation.goBack();
    } else {
      Alert.alert(strings.Error, strings.PleaseEnterValidNumber);
    }
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.headingText}>{strings.SocialSecurityNumber}</Text>
          <View style={styles.inputContainer}>
            <CustomTextInput
              value={firstField}
              inputStyle={styles.inputStyle}
              placeholder={'***'}
              fieldRef={field1Ref}
              onSubmitEditing={() => {
                field2Ref?.current?.focus();
              }}
              blurOnSubmit={false}
              keyboardType={'number-pad'}
              returnKeyType={'done'}
              maxLength={3}
              handleChange={e => {
                setFirstField(e);
                e.toString().length === 3 && field2Ref?.current?.focus();
              }}
            />
            <CustomTextInput
              value={secondField}
              inputStyle={styles.inputStyle2}
              placeholder={'**'}
              fieldRef={field2Ref}
              onSubmitEditing={() => {
                field3Ref?.current?.focus();
              }}
              blurOnSubmit={false}
              keyboardType={'number-pad'}
              returnKeyType={'done'}
              maxLength={2}
              handleChange={e => {
                setSecondField(e);
                e.toString().length == 2 && field3Ref?.current?.focus();
              }}
            />
            <CustomTextInput
              value={thirdField}
              inputStyle={styles.inputStyle3}
              placeholder={'****'}
              fieldRef={field3Ref}
              blurOnSubmit={true}
              keyboardType={'number-pad'}
              returnKeyType={'done'}
              maxLength={4}
              handleChange={e => {
                setThirdField(e);
              }}
            />
          </View>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.stepText}>{strings.SecurityNumberDesc}</Text>
          <View style={styles.imgTextWrapper}>
            <Text style={styles.stepText}>{strings.SecurityNumberDesc1}</Text>
            <Image
              style={styles.verifiedImg}
              source={require('../../assets/images/Verified.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.termsText}>
          {strings.TermDescText}
          <Text style={styles.termsTextBlue}>{strings.TermDescMainText}</Text>
        </Text>
        <View style={styles.submitBtnWrapper}>
          <CustomButton
            text={strings.Confirm}
            style={styles.confirmBtn}
            textStyle={styles.confirmBtnText}
            handleClick={handleConfirmClick}
          />
        </View>
      </View>
    </ScreenWrapperContainer>
  );
};

export default SocialSecurity;
