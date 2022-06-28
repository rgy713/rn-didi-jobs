import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomTextInput from '../../components/custom/CustomTextInput';
import {INPUT_NAME, REGISTER_STEPS} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {getFromAsyncStorage, setInAsyncStorage} from '../../utils';
import useStyles from './styles';

type InputLocationNavProp = StackNavigationProp<
  RootStackParamList,
  'InputLocation'
>;

const InputLocation = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<InputLocationNavProp>();
  const [location, setLocation] = useState<string>();
  const handleBackBtnPress = () => {
    navigation.navigate(INPUT_NAME);
  };

  useEffect(() => {
    setItemInAsyncStorage();
  }, []);

  const setItemInAsyncStorage = async () => {
    const userLocation = await getFromAsyncStorage('userLocation');
    if (userLocation) {
      setLocation(userLocation);
    }
  };

  const handleContinueBtnClick = () => {
    if (location) {
      //TODO: FIX ME
      //Save location
      setInAsyncStorage('userLocation', location);

      navigation.navigate(REGISTER_STEPS);
    }
  };

  const handleLocationChange = (event: any) => {
    setLocation(event);
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.container}>
        <Text style={styles.headingText}>{strings.Location}</Text>
        <CustomTextInput
          inputStyle={styles.locationInputStyle}
          placeholder={strings.YourCity}
          handleChange={handleLocationChange}
          value={location}
          onSubmitEditing={handleContinueBtnClick}
          blurOnSubmit={true}
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
      </View>
    </ScreenWrapperContainer>
  );
};

export default InputLocation;
