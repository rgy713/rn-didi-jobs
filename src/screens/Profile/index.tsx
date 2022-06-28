import {StackActions, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import StarIcon from '../../assets/icons/StarIcon';
import CustomListItem from '../../components/custom/CustomListItem';
import {
  DELETE_ACCOUNT,
  INPUT_EMAIL,
  LOGIN,
  PROFILE,
} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import ReviewsSwipeUp from '../MapPopups/ReviewsSwipeUp';
import useStyles from './styles';

type ProfileNavProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<ProfileNavProp>();

  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const toggleShowReviewModal = () => {
    setShowReviewModal(!showReviewModal);
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

  return (
    <ScreenWrapperContainer
      handleLeftBtnPress={handleBackBtnPress}
      headerContainerStyle={styles.headerContainerStyle}
      isHeader={true}
      mainContainerStyle={styles.mainContainer}>
      <View style={styles.containers}>
        <Text style={styles.headingText}>{strings.Profile}</Text>
        <Image
          source={require('../../assets/images/Profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>David Ross</Text>
        <View style={styles.reviewContainer}>
          <StarIcon />
          <Text style={styles.rating}>4.9</Text>
          <TouchableOpacity onPress={toggleShowReviewModal}>
            <Text style={styles.reviewCount}>7 {strings.ReviewsRightText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <CustomListItem
            handleClick={goInputEmail}
            title={'d***d@email.com'}
          />
          <CustomListItem handleClick={goInputPhone} title={'123-***-*234'} />
          <CustomListItem
            handleClick={() => {
              //TODO
            }}
            title={'Brooklyn, NY, USA'}
            hideArrow={true}
          />
          <CustomListItem
            handleClick={() => {
              navigation.navigate(DELETE_ACCOUNT);
            }}
            title={strings.DeleteAccount}
          />
        </View>
      </View>

      {showReviewModal && <ReviewsSwipeUp onHide={toggleShowReviewModal} />}
    </ScreenWrapperContainer>
  );
};
export default ProfileScreen;
