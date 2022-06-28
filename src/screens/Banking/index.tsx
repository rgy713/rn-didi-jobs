import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Alert, Text, TextInput, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomTextInput from '../../components/custom/CustomTextInput';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type BankingNavProps = StackNavigationProp<RootStackParamList, 'Banking'>;

interface BankingProps {
  route: any;
}

const Banking = (props: BankingProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const {task, handleUpdateStepData} = props.route.params;
  const nameRef: MutableRefObject<TextInput | null | undefined> = useRef();
  const accountNumberRef: MutableRefObject<TextInput | null | undefined> =
    useRef();
  const confirmAccountNumberRef: MutableRefObject<
    TextInput | null | undefined
  > = useRef();
  const navigation = useNavigation<BankingNavProps>();

  const [name, setName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState<string>('');

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const setItemInAsyncStorage = async () => {
    if (task) {
      setName(task.value1);
      setAccountNumber(task.value2);
      setConfirmAccountNumber(task.value2);
    }
  };

  useEffect(() => {
    setItemInAsyncStorage();
  }, []);

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleAccountNumberChange = (value: string) => {
    setAccountNumber(value);
  };

  const handleConfirmAccountNumberChange = (value: string) => {
    setConfirmAccountNumber(value);
  };

  const handleSkipClick = () => {
    // TODO Fix me
    let skipped = 2;
    if (task.value1 && task.value2) {
      skipped = 1;
    }
    task.status = skipped;
    handleUpdateStepData(task);
    navigation.goBack();
  };

  const handleConfirmClick = () => {
    if (
      name !== '' &&
      accountNumber !== '' &&
      confirmAccountNumber !== '' &&
      accountNumber == confirmAccountNumber
    ) {
      //TODO Fix me
      // Save bank info
      task.value1 = name;
      task.value2 = accountNumber;
      task.status = 1;
      handleUpdateStepData(task);
      navigation.goBack();
    } else {
      Alert.alert(strings.Error, strings.PleaseCompltedAllDetails);
    }
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.container}>
        <Text style={styles.headingText}>{strings.Banking}</Text>
        <View style={styles.detailsContainer}>
          <CustomTextInput
            inputStyle={styles.inputStyle}
            placeholder={strings.AccountHoldersName}
            handleChange={handleNameChange}
            value={name}
            fieldRef={nameRef}
            onSubmitEditing={() => {
              accountNumberRef?.current?.focus();
            }}
            blurOnSubmit={false}
            maxLength={50}
            autoFocus={true}
          />
          <CustomTextInput
            inputStyle={styles.inputStyle}
            placeholder={strings.BankAccountNumber}
            handleChange={handleAccountNumberChange}
            value={accountNumber}
            keyboardType={'number-pad'}
            fieldRef={accountNumberRef}
            onSubmitEditing={() => {
              confirmAccountNumberRef?.current?.focus();
            }}
            blurOnSubmit={false}
            maxLength={12}
            returnKeyType={'done'}
          />
          <CustomTextInput
            inputStyle={styles.inputStyle}
            placeholder={strings.RetypeBankAccountNumber}
            handleChange={handleConfirmAccountNumberChange}
            value={confirmAccountNumber}
            keyboardType={'number-pad'}
            fieldRef={confirmAccountNumberRef}
            blurOnSubmit={true}
            maxLength={12}
            returnKeyType={'done'}
          />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.submitBtnWrapper}>
          <CustomButton
            text={strings.Skip}
            style={styles.skipBtn}
            textStyle={styles.skipBtnText}
            handleClick={handleSkipClick}
          />
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
export default Banking;
