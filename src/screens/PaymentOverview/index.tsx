import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheet} from 'react-native-btr';
import StarIcon from '../../assets/icons/StarIcon';
import CustomButton from '../../components/custom/CustomButton';
import CustomSwipePopup from '../../components/custom/CustomSwipePopup';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type PaymentOverviewNavProps = StackNavigationProp<
  RootStackParamList,
  'PaymentOverview'
>;

const disputeData = [
  'Hazardous working environment',
  'Inappropriate remarks or actions',
  'Uncomfortable requests',
  'Unpermitted recording',
];

const PaymentOverview = (props: any) => {
  const navigation = useNavigation<PaymentOverviewNavProps>();
  const theme = useTheme();
  const styles = useStyles(theme);

  const [showJobDetail, setShowJobDetail] = React.useState(false);
  const [showDispute, setShowDispute] = React.useState(false);
  const [showOptions, setShowOptions] = React.useState(false);

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const handleJobDetailBtnClick = () => {
    setShowJobDetail(!showJobDetail);
  };

  const handleDisputeBtnClick = () => {
    setShowDispute(!showDispute);
    setShowJobDetail(false);
  };

  const handleOptionsBtnClick = () => {
    setShowOptions(!showOptions);
    setShowDispute(false);
  };

  const renderDisputeItems = (data: string[]) => {
    return data.map((item: string, index: number) => (
      <TouchableOpacity
        style={[styles.ReportTitleBlock, styles.borderBottom]}
        key={index}
        onPress={() => {
          handleOptionsBtnClick();
        }}>
        <Text style={styles.reportContent}>{item}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.headingTextCotainer}>
        <Text style={styles.headingText}>{strings.PaymentOverview}</Text>
      </View>
      <View style={styles.stepsContainer}>
        <View>
          <View style={styles.containerBlock}>
            <Text style={styles.assemble}>Base Job</Text>
            <Text style={styles.assemble}>$158</Text>
          </View>
          <View style={styles.containerBlock}>
            <Text style={styles.contain}>Service fee</Text>
            <Text style={styles.contain}>-$15</Text>
          </View>
          <View style={[styles.containerBlock, {paddingVertical: 20}]}>
            <Text style={styles.assemble}>{strings.Total}</Text>
            <Text style={styles.assemble}>$136.03</Text>
          </View>
        </View>
      </View>

      <View style={styles.submitBtnWrapper}>
        <CustomButton
          text={strings.JobDetails}
          style={styles.confirmBtn}
          textStyle={styles.confirmBtnText}
          handleClick={handleJobDetailBtnClick}
        />
      </View>

      {showJobDetail && (
        <CustomSwipePopup onHide={handleJobDetailBtnClick}>
          <View style={styles.bottomSheetBlock}>
            <View style={[styles.bottomSheetinner, {marginTop: 30}]}>
              <Text style={styles.cardTitle}>Furniture Assembly</Text>
              <Text style={styles.contentText}>Job Ended at 7:12 PM</Text>
              <Text style={styles.contentText}>Poster: Sadle Jeq</Text>
              <View>
                <Image
                  style={styles.profileImg}
                  source={require('../../assets/images/Profile.png')}
                />
              </View>
              <View style={styles.ratingBlock}>
                <StarIcon />
                <Text style={styles.ratingText}>4.84</Text>
              </View>

              <View style={styles.bottomSheetinner}>
                <Text style={[styles.contentText, {paddingBottom: 30}]}>
                  2 Piece of Furniture
                </Text>
                <Text style={styles.contentText}>
                  Accepted Candidate: David Ross
                </Text>
                <View>
                  <Image
                    style={styles.profileImg}
                    source={require('../../assets/images/Profile.png')}
                  />
                </View>
                <View style={styles.ratingBlock}>
                  <StarIcon />
                  <Text style={styles.ratingText}>4.84</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomBtnBlock}>
              <CustomButton
                text={strings.Dispute}
                style={[styles.confirmBtn, {backgroundColor: '#F8F8FC'}]}
                textStyle={[styles.confirmBtnText, {color: 'black'}]}
                handleClick={handleDisputeBtnClick}
              />
            </View>
          </View>
        </CustomSwipePopup>
      )}

      {showDispute && (
        <CustomSwipePopup onHide={handleDisputeBtnClick}>
          <Text style={styles.cardTitle}>{strings.DisputeRequest}</Text>
          {renderDisputeItems(disputeData)}
        </CustomSwipePopup>
      )}

      {showOptions && (
        <CustomSwipePopup onHide={handleOptionsBtnClick}>
          <View style={[styles.bottomSheetBlock, {height: 250}]}>
            <View
              style={[
                styles.bottomSheetinner,
                {justifyContent: 'center', paddingTop: 20},
              ]}>
              <Text style={styles.cardTitle}>Contact options</Text>
              <Text style={[styles.contentText, {fontWeight: '600'}]}>
                If you feel this is an emergency, call 911
              </Text>
            </View>
            <View style={[styles.bottomButtonsRow, {marginTop: 20}]}>
              <CustomButton
                text={strings.Call}
                style={styles.callBtn}
                textStyle={styles.callBtnText}
                handleClick={() => {
                  // TODO
                }}
              />
              <CustomButton
                text={strings.Message}
                style={styles.messageBtn}
                textStyle={styles.messageBtnText}
                handleClick={() => {
                  // TODO
                }}
              />
            </View>
          </View>
        </CustomSwipePopup>
      )}
    </ScreenWrapperContainer>
  );
};

export default PaymentOverview;
