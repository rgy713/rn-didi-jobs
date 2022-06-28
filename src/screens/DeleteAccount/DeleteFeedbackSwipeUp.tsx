import {useTheme} from '@react-navigation/native';
import React from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomSwipePopup from '../../components/custom/CustomSwipePopup';
import CustomTextInput from '../../components/custom/CustomTextInput';
import strings from '../../i18n';
import useStyles from './styles';

interface Props {
  onHide: () => void;
  onSkip: () => void;
  onSubmit: (feedback: string) => void;
}
const DeleteFeedbackSwipeUp = (props: Props) => {
  const [feedback, setFeedback] = useState('');
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <CustomSwipePopup onHide={props.onHide}>
      <View style={styles.feedbackContainer}>
        <Text style={styles.headingText}>{strings.FeedbackTitle}</Text>
        <View style={styles.inputContainer}>
          <CustomTextInput
            multiline={true}
            numberOfLines={10}
            inputStyle={styles.feedbackInputStyle}
            placeholder={strings.FeedbackPlaceholder}
            handleChange={(feedback: string) => setFeedback(feedback)}
            keyboardType={'default'}
            value={feedback}
            onSubmitEditing={() => {}}
          />
        </View>

        <View style={styles.submitBtnWrapper}>
          <CustomButton
            text={strings.Skip}
            style={styles.skipBtn}
            textStyle={styles.skipBtnText}
            handleClick={props.onSkip}
          />
          <CustomButton
            text={strings.Submit}
            style={styles.confirmBtn}
            textStyle={styles.confirmBtnText}
            handleClick={() => props.onSubmit(feedback)}
          />
        </View>
      </View>
    </CustomSwipePopup>
  );
};

export default DeleteFeedbackSwipeUp;
