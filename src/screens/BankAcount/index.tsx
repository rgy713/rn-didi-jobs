import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import CustomButton from '../../components/custom/CustomButton';
import CustomSwipePopup from '../../components/custom/CustomSwipePopup';
import CustomTextInput from '../../components/custom/CustomTextInput';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type BankAccountNavProps = StackNavigationProp<
  RootStackParamList,
  'BankAccount'
>;
type BankType = {
  id: number;
  name: string;
  accountNumber: string;
  isSelected: boolean;
};

let bankData = [
  {
    id: 1,
    name: 'Bank account ending in 102',
    accountNumber: '0000 0000 0000 0000',
    isSelected: true,
  },
];

const BankAccount = (props: any) => {
  const navigation = useNavigation<BankAccountNavProps>();
  const theme = useTheme();
  const styles = useStyles(theme);

  const [showOption, setShowOption] = useState(false);

  const nameRef: MutableRefObject<TextInput | null | undefined> = useRef();

  const accountNumberRef: MutableRefObject<TextInput | null | undefined> =
    useRef();
  const confirmAccountNumberRef: MutableRefObject<
    TextInput | null | undefined
  > = useRef();
  const [name, setName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState<string>('');
  const [bankList, setBankList] = useState<BankType[]>([]);

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const toggleShowOption = () => {
    setShowOption(!showOption);
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleAccountNumberChange = (value: string) => {
    setAccountNumber(value);
  };

  const handleConfirmAccountNumberChange = (value: string) => {
    setConfirmAccountNumber(value);
  };

  const renderBank = (banks: BankType[]) => {
    return banks.map(bank => (
      <View style={styles.contentBlock} key={bank.id}>
        <View style={styles.contentBlockinner}>
          <Image source={require('../../assets/images/Payout.png')} />
          <Text style={[styles.cardContent, {paddingHorizontal: 10}]}>
            {bank.name}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.radioBtn, bank.isSelected ? styles.selected : {}]}
        />
      </View>
    ));
  };

  const addBankList = () => {
    setBankList(bankData);
  };

  useEffect(() => {
    addBankList();
  }, []);

  const addBank = () => {
    if (
      name &&
      accountNumber.length === 16 &&
      accountNumber === confirmAccountNumber
    ) {
      let id = 0;
      bankData.map(bank => {
        id = bank.id;
        bank.isSelected = false;
      });
      bankData.push({
        id: id + 1,
        name: name,
        accountNumber: accountNumber,
        isSelected: true,
      });
      setShowOption(false);
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
      <View>
        <View style={styles.headingTextCotainer}>
          <Text style={styles.headingText}>{strings.SelectBankAccount}</Text>
        </View>
        {renderBank(bankList)}
      </View>
      <View style={styles.submitBtnWrapper}>
        <CustomButton
          text={strings.AddNew}
          style={styles.confirmBtn}
          textStyle={styles.confirmBtnText}
          handleClick={toggleShowOption}
        />
      </View>

      {showOption && (
        <CustomSwipePopup noSensitive={true} onHide={toggleShowOption}>
          <View style={styles.firstBottomSheetBlock}>
            <View style={styles.bottomSheetinner}>
              <Text style={styles.Cardtitle}>Add Bank Account</Text>
            </View>

            <View style={{marginVertical: 20, alignItems: 'center', flex: 2}}>
              <View style={{paddingBottom: 10}}>
                <Text style={styles.cardFieldTitle}>Account holder’s name</Text>
                <CustomTextInput
                  inputStyle={styles.inputStyle}
                  placeholder={'Full Name'}
                  handleChange={handleNameChange}
                  value={name}
                  fieldRef={nameRef}
                  onSubmitEditing={() => {
                    accountNumberRef?.current?.focus();
                  }}
                  blurOnSubmit={false}
                  autoFocus={false}
                  maxLength={50}
                />
              </View>

              <View style={{paddingBottom: 10}}>
                <Text style={styles.cardFieldTitle}>Bank account number</Text>
                <CustomTextInput
                  inputStyle={styles.inputStyle}
                  placeholder={'0000 0000 0000 0000'}
                  handleChange={handleAccountNumberChange}
                  value={accountNumber}
                  keyboardType={'number-pad'}
                  fieldRef={accountNumberRef}
                  onSubmitEditing={() => {
                    confirmAccountNumberRef?.current?.focus();
                  }}
                  blurOnSubmit={false}
                  maxLength={16}
                  returnKeyType={'done'}
                />
              </View>

              <View style={{paddingBottom: 10}}>
                <Text style={styles.cardFieldTitle}>
                  Re-type bank account number
                </Text>
                <CustomTextInput
                  inputStyle={styles.inputStyle}
                  placeholder={'0000 0000 0000 0000'}
                  handleChange={handleConfirmAccountNumberChange}
                  value={confirmAccountNumber}
                  keyboardType={'number-pad'}
                  fieldRef={confirmAccountNumberRef}
                  blurOnSubmit={true}
                  maxLength={16}
                  returnKeyType={'done'}
                />
              </View>
            </View>
            <View style={styles.popupBtnWrapper}>
              <CustomButton
                text={strings.Confirm}
                style={styles.confirmPopUpBtn}
                textStyle={styles.confirmPopUpBtnText}
                handleClick={() => {
                  addBank();
                }}
              />
            </View>
          </View>
        </CustomSwipePopup>
      )}
    </ScreenWrapperContainer>
  );
};
export default BankAccount;
