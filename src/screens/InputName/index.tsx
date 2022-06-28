import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomTextInput from '../../components/custom/CustomTextInput';
import {INPUT_EMAIL, INPUT_LOCATION} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {getFromAsyncStorage, setInAsyncStorage} from '../../utils';

import useStyles from './styles';

type InputNameNavProp = StackNavigationProp<RootStackParamList, 'InputName'>;

const InputName = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<InputNameNavProp>();
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();
  const firstNameRef: MutableRefObject<TextInput | null | undefined> = useRef();
  const lastNameRef: MutableRefObject<TextInput | null | undefined> = useRef();

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setItemInAsyncStorage();
  }, []);

  const setItemInAsyncStorage = async () => {
    const userName = await getFromAsyncStorage('username');
    if (userName?.firstname) {
      setFirstname(userName.firstname);
    }
    if (userName?.lastname) {
      setLastname(userName.lastname);
    }
  };

  const handleContinueBtnClick = () => {
    if (firstname && lastname) {
      //TODO: FIX ME
      // Save firstname and lastname
      setInAsyncStorage('username', {
        firstname: firstname,
        lastname: lastname,
      });

      navigation.navigate(INPUT_LOCATION);
    }
  };

  const handleNameChange = (value: string, type: string) => {
    switch (type) {
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
    }

    setInAsyncStorage('username', {
      firstname: firstname,
      lastname: lastname,
    });
  };

  const handleSubitEditing = () => {
    handleContinueBtnClick();
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.container}>
        <Text style={styles.headingText}>{strings.YourName}</Text>
        <View style={styles.fieldContainer}>
          <CustomTextInput
            value={firstname}
            inputStyle={styles.field}
            placeholder={strings.FirstName}
            handleChange={value => handleNameChange(value, 'firstname')}
            blurOnSubmit={false}
            fieldRef={firstNameRef}
            onSubmitEditing={() => {
              lastNameRef?.current?.focus();
            }}
            autoFocus={true}
          />
          <CustomTextInput
            value={lastname}
            inputStyle={styles.field}
            placeholder={strings.LastName}
            handleChange={value => handleNameChange(value, 'lastname')}
            onSubmitEditing={handleSubitEditing}
            fieldRef={lastNameRef}
            blurOnSubmit={true}
          />
        </View>
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

export default InputName;
