import {useTheme} from '@react-navigation/native';
import React, {useRef} from 'react';
import {Image, Text, View} from 'react-native';
import StarIcon from '../../../assets/icons/StarIcon';
import CustomButton from '../../../components/custom/CustomButton';
import strings from '../../../i18n';
import useStyles from './styles';

interface Props {
  onHide: () => void;
  onArrived: () => void;
  onMessage: () => void;
  onCancel: () => void;
}

const AcceptedJob = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const y = useRef<any>();

  return (
    <View
      style={styles.jobLayoutContainer}
      onTouchStart={e => {
        y.current = e.nativeEvent.pageY;
      }}
      onTouchEnd={e => {
        // some threshold. add whatever suits you
        if (e.nativeEvent.pageY - y.current > 30) {
          props.onHide();
        }
      }}>
      <View style={styles.headerRowContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.usernameText}>David</Text>
          <View style={styles.reviewContainer}>
            <StarIcon />
            <Text style={styles.rating}>4.9</Text>
          </View>
        </View>
        <Image
          source={require('../../../assets/images/Profile.png')}
          style={styles.profileImage}
        />
      </View>
      <View style={[styles.bottomButtonsRow]}>
        <View style={styles.actionBtnContainer}>
          <CustomButton
            text={strings.Arrived}
            style={styles.actionBtn}
            textStyle={styles.actionBtnText}
            handleClick={props.onArrived}
          />
        </View>
        <View style={styles.actionBtnContainer}>
          <CustomButton
            text={strings.Message}
            style={styles.actionBtn}
            textStyle={styles.actionBtnText}
            handleClick={props.onMessage}
          />
        </View>
        <View style={styles.actionBtnContainer}>
          <CustomButton
            text={strings.Cancel}
            style={styles.actionBtn}
            textStyle={styles.actionBtnText}
            handleClick={props.onCancel}
          />
        </View>
      </View>
    </View>
  );
};

export default AcceptedJob;
