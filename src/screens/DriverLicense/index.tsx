import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {RootStackParamList} from '../../navigation/StackNavigator';
import ImagePicker from 'react-native-image-crop-picker';
import useStyles from './styles';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import {ImageBackground, Text, View} from 'react-native';
import strings from '../../i18n';
import CustomButton from '../../components/custom/CustomButton';

type DriverLicenseNavProps = StackNavigationProp<
  RootStackParamList,
  'DriverLicense'
>;

interface DriverLicenseProps {
  route: any;
}

const DriverLicense = (props: DriverLicenseProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<DriverLicenseNavProps>();
  const {task, handleUpdateStepData} = props.route.params;
  const [image, setImage] = useState<any>();

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const handleTakePictureClick = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 300,
      cropping: true,
    }).then((result: any) => {
      setImage(result);
    });
  };

  const handleSubmitClick = () => {
    // TODO Fix me
    task.status = 1;
    handleUpdateStepData(task);
    navigation.goBack();
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>{strings.DriverLicenseTitle}</Text>
        <View style={styles.imageBox}>
          {image && (
            <ImageBackground
              resizeMode="cover"
              style={styles.img}
              source={{uri: image.path}}
            />
          )}
          {!image && (
            <ImageBackground
              resizeMode="cover"
              style={styles.img}
              source={require('../../assets/images/CarDriverLicenceCard.jpeg')}
            />
          )}
        </View>
      </View>
      <View style={styles.stepsContainer}>
        <Text style={styles.stepHeading}>{strings.DriverLicenseHelpTitle}</Text>
        <View>
          <Text style={styles.stepText}>{strings.DriverLicenseHelpText1}</Text>
          <Text style={styles.stepText}>{strings.DriverLicenseHelpText2}</Text>
          <Text style={styles.stepText}>{strings.DriverLicenseHelpText3}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        {!image ? (
          <View>
            <Text style={styles.submitMessageText}>
              {strings.DriverLicenseSubmitMessage}
            </Text>
            <View style={styles.submitBtnWrapper}>
              <CustomButton
                text={strings.TakePicture}
                style={styles.takePictureBtn}
                textStyle={styles.takePictureBtnText}
                handleClick={handleTakePictureClick}
              />
            </View>
          </View>
        ) : (
          <View style={styles.submitBtnWrapper}>
            <CustomButton
              text={strings.Retake}
              style={styles.retakeBtn}
              textStyle={styles.retakeBtnText}
              handleClick={handleTakePictureClick}
            />
            <CustomButton
              text={strings.Submit}
              style={styles.submitBtn}
              textStyle={styles.submitBtnText}
              handleClick={handleSubmitClick}
            />
          </View>
        )}
      </View>
    </ScreenWrapperContainer>
  );
};

export default DriverLicense;
