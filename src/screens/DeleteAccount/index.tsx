import {StackActions, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useRef, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import EmailIcon from '../../assets/icons/EmailIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import CustomButton from '../../components/custom/CustomButton';
import {
  GET_STARTED,
  INPUT_EMAIL,
  LOGIN,
  PROFILE,
} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import UserInfo from '../../stores/auth/UserInfo';
import {setInAsyncStorage} from '../../utils';
import DeleteConfirmSwipeUp from './DeleteConfirmSwipeUp';
import DeleteFeedbackSwipeUp from './DeleteFeedbackSwipeUp';
import useStyles from './styles';

type DeleteAccountNavProp = StackNavigationProp<
  RootStackParamList,
  'DeleteAccount'
>;

interface DeleteAccountProps {}

const DeleteAccount = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<DeleteAccountNavProp>();

  const phoneRef: any = useRef();
  const emailRef: any = useRef();

  const [phoneTxt, setPhoneTxt] = useState('');
  const [emailTxt, setEmailTxt] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const goInputEmail = () => {
    navigation.push(INPUT_EMAIL, {
      nextScreen: PROFILE,
    } as any);
  };

  const goInputPhone = () => {
    navigation.push(LOGIN, {
      nextScreen: PROFILE,
    } as any);
  };

  const handleConfirmBtnPress = () => {
    if (!confirmDelete) {
      Alert.alert(
        strings.Error,
        'Plase enter the number and email associated with this account.',
      );
    } else {
      setShowFeedback(true);
    }
  };

  const onDelete = () => {
    setShowConfirm(false);
    // TODO
    setInAsyncStorage('login', false);

    navigation.dispatch(StackActions.replace(GET_STARTED));
  };

  const submitFeedback = (feedback: string) => {
    if (feedback) {
      setShowFeedback(false);
      setShowConfirm(true);
    } else {
      Alert.alert(strings.Error, 'Plase input feedback.');
    }
  };

  const handleChangePhone = (value: string) => {
    setPhoneTxt(value);
  };

  const handleChangeEmail = (value: string) => {
    setEmailTxt(value);
  };

  const checkPhone = () => {
    if (phoneTxt !== UserInfo.phoneNumber.slice(2)) {
      Alert.alert(
        strings.Error,
        'Plase enter the number associated with this account.',
      );
    } else if (emailTxt == UserInfo.email) {
      setConfirmDelete(true);
    }
  };

  const checkEmail = () => {
    if (emailTxt !== UserInfo.email) {
      Alert.alert(
        strings.Error,
        'Plase enter the email associated with this account.',
      );
    } else if (phoneTxt == UserInfo.phoneNumber.slice(2)) {
      setConfirmDelete(true);
    }
  };

  return (
    <ScreenWrapperContainer
      handleLeftBtnPress={handleBackBtnPress}
      headerContainerStyle={styles.headerContainerStyle}
      isHeader={true}
      mainContainerStyle={styles.mainContainer}>
      <View style={styles.containers}>
        <View>
          <Text style={styles.headingText}>{strings.DeleteAccount}</Text>
          <Text style={styles.deleteInfoText}>
            {strings.DeleteAccountInfoText}:
          </Text>
          <View style={styles.deleteInfoListContainer}>
            <Text style={styles.deleteInfo}>
              - {strings.DeleteAccountInfoText1}
            </Text>
            <Text style={styles.deleteInfo}>
              - {strings.DeleteAccountInfoText2}
            </Text>
            <Text style={styles.deleteInfo}>
              - {strings.DeleteAccountInfoText3}
            </Text>
          </View>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.itemContainer}>
            <TextInput
              ref={phoneRef}
              style={styles.itemText}
              placeholder="Phone number"
              keyboardType="numeric"
              placeholderTextColor="gray"
              maxLength={12}
              returnKeyType={'done'}
              onChangeText={handleChangePhone}
              onSubmitEditing={checkPhone}></TextInput>
            <TouchableOpacity onPress={() => phoneRef?.current?.focus()}>
              <PhoneIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TextInput
              ref={emailRef}
              style={styles.itemText}
              placeholder="Email"
              placeholderTextColor="gray"
              returnKeyType={'done'}
              onChangeText={handleChangeEmail}
              onSubmitEditing={checkEmail}></TextInput>
            <TouchableOpacity onPress={() => emailRef?.current?.focus()}>
              <EmailIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.changeBtnWrapper}>
          <CustomButton
            text={strings.ChangeNumberInstead}
            style={styles.changeNumberBtn}
            textStyle={styles.btnText}
            handleClick={goInputPhone}
          />
          <CustomButton
            text={strings.ChangeEmailInstead}
            style={styles.changeEmailBtn}
            textStyle={styles.btnText}
            handleClick={goInputEmail}
          />
        </View>
        <View style={styles.deleteBtnWrapper}>
          <CustomButton
            text={strings.DeleteAccount}
            style={[
              styles.deleteBtn,
              confirmDelete && {backgroundColor: '#E80909'},
            ]}
            textStyle={[
              styles.deleteBtnText,
              confirmDelete && {color: 'white'},
            ]}
            handleClick={handleConfirmBtnPress}
          />
        </View>
      </View>

      {showFeedback && (
        <DeleteFeedbackSwipeUp
          onHide={() => setShowFeedback(false)}
          onSkip={() => {
            setShowFeedback(false);
            setShowConfirm(true);
          }}
          onSubmit={feedback => {
            submitFeedback(feedback);
          }}
        />
      )}

      {showConfirm && (
        <DeleteConfirmSwipeUp
          onHide={() => setShowConfirm(false)}
          onConfirm={onDelete}
        />
      )}
    </ScreenWrapperContainer>
  );
};

export default DeleteAccount;
