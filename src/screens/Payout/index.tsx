import {StackActions, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AngleRightIcon from '../../assets/icons/AngleRightIcon';
import CustomButton from '../../components/custom/CustomButton';
import CustomSwipePopup from '../../components/custom/CustomSwipePopup';
import {
  BANK_ACCOUNT,
  MAP_DRAWER,
  PAYOUT,
  SUCCESS,
} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type PayoutNavProps = StackNavigationProp<RootStackParamList, 'Payout'>;

const Payout = (props: any) => {
  const navigation = useNavigation<PayoutNavProps>();
  const theme = useTheme();
  const styles = useStyles(theme);
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    setShowOption(false);
  }, []);

  const handleBackBtnPress = () => {
    navigation.navigate(MAP_DRAWER);
  };

  const handleConfirmBtnPress = () => {
    toggleShowOption();
  };

  const toggleShowOption = () => {
    setShowOption(!showOption);
  };

  const goSuccess = () => {
    navigation.dispatch(
      StackActions.replace(SUCCESS, {
        title: 'Transfer Successful',
        nextScreen: PAYOUT,
      } as any),
    );
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.innerContainer}>
        <View style={styles.headingTextCotainer}>
          <Text style={styles.headingText}>{strings.Payout}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(BANK_ACCOUNT);
          }}
          style={styles.methodBlock}>
          <Text style={styles.titleText}>{strings.BankAccount}</Text>
          <AngleRightIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.submitBtnWrapper}>
        <CustomButton
          text={strings.PaycheckBtnText('$500.02')}
          style={styles.confirmBtn}
          textStyle={styles.confirmBtnText}
          handleClick={handleConfirmBtnPress}
        />
      </View>

      {showOption && (
        <CustomSwipePopup
          onHide={() => {
            setShowOption(false);
          }}>
          <View style={styles.bottomSheetinner}>
            <Text style={styles.Cardtitle}>Cashing out</Text>
            <Text style={[styles.Cardtitle, {color: '#2ECC71'}]}> $500.02</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setShowOption(false);
              navigation.navigate(BANK_ACCOUNT);
            }}
            style={styles.bottomSheetContent}>
            <View>
              <Image source={require('../../assets/images/Payout.png')} />
            </View>
            <Text style={[styles.titleText, {paddingLeft: 5}]}>
              Bank account ending in 102
            </Text>
            <View style={{padding: 5, paddingLeft: 20}}>
              <AngleRightIcon />
            </View>
          </TouchableOpacity>

          <View style={styles.bottomBtnWrapper}>
            <CustomButton
              text={'1-3 Business days (free)'}
              style={styles.bottomSheetBtn}
              textStyle={styles.confirmBtnText}
              handleClick={() => {
                goSuccess();
              }}
            />
          </View>
        </CustomSwipePopup>
      )}
    </ScreenWrapperContainer>
  );
};
export default Payout;
