import {useTheme} from '@react-navigation/native';
import {string} from 'prop-types';
import React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomSwipePopup from '../../components/custom/CustomSwipePopup';
import strings from '../../i18n';
import useStyles from './styles';

interface Props {
  onHide: () => void;
  onConfirm: () => void;
}
const DeleteConfirmSwipeUp = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <CustomSwipePopup onHide={props.onHide}>
      <View style={styles.deleteInfoTextContainer}>
        <Text style={styles.deleteConfirmText1}>
          {strings.DeleteAccountTitle}
        </Text>
        <Text style={styles.deleteConfirmText2}>
          {strings.DeleteAccountDesc1}
        </Text>
        <Text style={styles.deleteConfirmText3}>
          {strings.DeleteAccountDesc2}
        </Text>
        <Text style={styles.deleteConfirmText4}>
          {strings.DeleteAccountDesc3}
        </Text>
      </View>
      <View style={styles.submitBtnWrapper}>
        <CustomButton
          text={strings.Cancel}
          style={styles.deleteCancelBtn}
          textStyle={styles.deleteCancelBtnText}
          handleClick={props.onHide}
        />
        <CustomButton
          text={strings.Confirm}
          style={styles.deleteConfirmBtn}
          textStyle={styles.deleteConfirmBtnText}
          handleClick={props.onConfirm}
        />
      </View>
    </CustomSwipePopup>
  );
};

export default DeleteConfirmSwipeUp;
