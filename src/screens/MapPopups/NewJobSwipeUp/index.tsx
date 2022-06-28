import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FlagIcon from '../../../assets/icons/FlagIcon';
import StarIcon from '../../../assets/icons/StarIcon';
import CustomButton from '../../../components/custom/CustomButton';
import strings from '../../../i18n';
import useStyles from './styles';

interface Props {
  onHide: () => void;
  onDecline: () => void;
  onEquipment: () => void;
  onRequirement: () => void;
  onAccept: () => void;
  onReport: () => void;
  onReview: () => void;
}

const NewJobSwipeUp = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <View style={styles.swipeWrapper}>
      <View style={styles.swipeLayoutContainer}>
        <View style={styles.headerRowContainer}>
          <CustomButton
            text={strings.Decline}
            style={styles.declineBtn}
            textStyle={styles.declineBtnText}
            handleClick={props.onDecline}
          />
          <Text style={styles.usernameText}>David</Text>
        </View>
        <Image
          source={require('../../../assets/images/Profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.reviewContainer}>
          <StarIcon />
          <Text style={styles.rating}>4.84</Text>
          <TouchableOpacity onPress={props.onReview}>
            <Text style={styles.reviewCount}>
              7 {strings.Reviews}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.report} onPress={props.onReport}>
            <FlagIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.jobTitleContainer}>
          <View style={styles.jobFeeContainer}>
            <Text style={styles.jobUnder}>{strings.Under}</Text>
            <Text style={styles.jobFee}>$200</Text>
          </View>
          <Text style={styles.jobTitle}>Furniture Assembly</Text>
        </View>
        <Text style={styles.jobType}>Short Job</Text>
        <Text style={styles.jobEstTime}>Est. arrival time: 7:45 pm</Text>
        <Text style={styles.jobDistance}>10 miles away</Text>
        <View style={styles.bottomButtonsRow}>
          <View style={styles.actionBtnContainer}>
            <View style={styles.actionIndicator} />
            <CustomButton
              text={strings.Equipment}
              style={styles.equipmentBtn}
              textStyle={styles.bottomBtnText}
              handleClick={props.onEquipment}
            />
          </View>
          <View style={styles.actionBtnContainer}>
            <View style={styles.actionIndicator} />
            <CustomButton
              text={strings.Requirements}
              style={styles.requirementBtn}
              textStyle={styles.bottomBtnText}
              handleClick={props.onRequirement}
            />
          </View>
          <CustomButton
            text={strings.Accept}
            style={styles.acceptBtn}
            textStyle={styles.bottomBtnText}
            handleClick={props.onAccept}
          />
        </View>
      </View>
    </View>
  );
};

export default NewJobSwipeUp;
