import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FlagIcon from '../../../assets/icons/FlagIcon';
import StarIcon from '../../../assets/icons/StarIcon';
import CustomButton from '../../../components/custom/CustomButton';
import CustomSwipePopup from '../../../components/custom/CustomSwipePopup';
import strings from '../../../i18n';
import useStyles from './styles';

interface Props {
  onHide: () => void;
  onEquipment: () => void;
  onRequirement: () => void;
  onReport: () => void;
  onReview: () => void;
}

const ArrivedSwipeUp = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <CustomSwipePopup onHide={props.onHide}>
      <View style={styles.headerRowContainer}>
        <Text style={styles.usernameText}>David</Text>
      </View>
      <Image
        source={require('../../../assets/images/Profile.png')}
        style={styles.profileImage}
      />
      <View style={styles.reviewContainer}>
        <StarIcon />
        <Text style={styles.rating}>4.9</Text>
        <TouchableOpacity>
            <Text style={styles.reviewCount} onPress={props.onReview}>
              7 {strings.Reviews}
            </Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.report} onPress={props.onReport}>
            <FlagIcon />
          </TouchableOpacity>
      </View>
      <View style={styles.jobTitleContainer}>
        <View style={styles.jobFeeContainer}>
          <Text style={styles.jobFee}>$200</Text>
        </View>
        <Text style={styles.jobTitle}>Furniture Assembly</Text>
      </View>
      <Text style={styles.jobType}>Short Job</Text>
      <Text style={styles.jobEstTime}>Est. arrival time: 7:45 pm</Text>
      <Text style={styles.jobDistance}>10 miles away</Text>
      <View style={styles.bottomButtonsRow}>
        <View style={styles.actionBtnContainer}>
          <CustomButton
            text={strings.Equipment}
            style={styles.equipmentBtn}
            textStyle={styles.bottomBtnText}
            handleClick={props.onEquipment}
          />
        </View>
        <View style={styles.actionBtnContainer}>
          <CustomButton
            text={strings.Requirements}
            style={styles.requirementBtn}
            textStyle={styles.bottomBtnText}
            handleClick={props.onRequirement}
          />
        </View>
      </View>
    </CustomSwipePopup>
  );
};

export default ArrivedSwipeUp;
