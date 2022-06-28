import {StackActions, useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import CustomTextInput from '../../components/custom/CustomTextInput';
import {MAP_DRAWER, SUCCESS} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type FeedbackNavProp = StackNavigationProp<RootStackParamList, 'Feedback'>;

const Feedback = (props: any) => {
  const navigation = useNavigation<FeedbackNavProp>();
  const theme = useTheme();
  const styles = useStyles(theme);

  const [feedback, setFeedback] = useState('');

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const submitFeedback = () => {
    if (feedback) {
      navigation.dispatch(
        StackActions.replace(SUCCESS, {
          title: strings.FeedbackSent,
          nextScreen: MAP_DRAWER,
        } as any),
      );
    }
  };

  return (
    <ScreenWrapperContainer
      handleLeftBtnPress={handleBackBtnPress}
      headerContainerStyle={styles.headerContainerStyle}
      isHeader={true}
      mainContainerStyle={styles.mainContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.headingText}>Feedback</Text>
        <View style={styles.feedbackContainer}>
          <CustomTextInput
            multiline
            numberOfLines={10}
            inputStyle={styles.feedbackInputStyle}
            placeholder={strings.FeedbackPlaceholder1}
            handleChange={feedback => setFeedback(feedback)}
            keyboardType={'default'}
            value={feedback}
            onSubmitEditing={() => {}}
            autoFocus={true}
          />
        </View>
        <CustomButton
          text={strings.Submit}
          style={styles.confirmBtn}
          textStyle={styles.confirmBtnText}
          handleClick={submitFeedback}
        />
      </View>
    </ScreenWrapperContainer>
  );
};
export default Feedback;
