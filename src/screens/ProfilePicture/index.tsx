import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../../navigation/StackNavigator';
import ImagePicker from 'react-native-image-crop-picker';
import useStyles from './styles';
import {Alert, ImageBackground, Platform, Text, View} from 'react-native';
import strings from '../../i18n';
import CustomButton from '../../components/custom/CustomButton';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  PermissionStatus,
  openSettings,
} from 'react-native-permissions';

type ProfilePictureNavProps = StackNavigationProp<
  RootStackParamList,
  'ProfilePicture'
>;

interface ProfilePictureProps {
  route: any;
}

const ProfilePicture = (props: ProfilePictureProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const {task, handleUpdateStepData} = props.route.params;
  const navigation = useNavigation<ProfilePictureNavProps>();
  const [image, setImage] = useState<any>();
  const [permission, setPermission] = useState(false);

  const getPermission = () => {
    return Platform.OS == 'ios'
      ? PERMISSIONS.IOS.CAMERA
      : PERMISSIONS.ANDROID.CAMERA;
  };

  const checkCameraPermission = () => {
    check(getPermission())
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            setPermission(true);
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
      });
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const requestPermission = () => {
    request(getPermission())
      .then((result: PermissionStatus) => {
        if (result == RESULTS.GRANTED) {
          setPermission(true);
          openCamera();
        } else {
          openSettings().catch(() => console.warn('cannot open settings'));
        }
      })
      .catch(error => {
        // …
        //openSettings().catch(() => console.warn('cannot open settings'));
      });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    })
      .then((result: any) => {
        setImage(result);
      })
      .catch(error => {
        // …
      });
  };

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const handleTakePictureClick = () => {
    if (permission) {
      openCamera();
    } else {
      requestPermission();
    }
  };

  const handleSubmitClick = () => {
    task.status = 1;
    handleUpdateStepData(task);
    navigation.goBack();
  };

  const renderDescPicture = () => {
    return (
      <View style={styles.stepsContainer}>
        <Text style={styles.stepHeading}>{strings.PictureDescTitle}:</Text>
        <Text style={styles.stepText}>{strings.PictureDesc1}</Text>
        <Text style={styles.stepText}>{strings.PictureDesc2}</Text>
        <Text style={styles.stepText}>{strings.PictureDesc3}</Text>
      </View>
    );
  };

  const renderSubmitAndRetake = () => {
    return (
      <View>
        <Text style={styles.submitMessageText}>
          {strings.PictureSubmitTitle}
        </Text>
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
      </View>
    );
  };

  return (
    <ScreenWrapperContainer
      headerContainerStyle={styles.headerContainerStyle}
      mainContainerStyle={styles.mainContainer}
      handleLeftBtnPress={handleBackBtnPress}
      isHeader={true}>
      <View style={styles.innerContainer}>
        <Text style={styles.headingText}>{strings.ProfilePicture}</Text>
        <View style={styles.imageCircle}>
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
              source={require('../../assets/images/ProfileImg.webp')}
            />
          )}
        </View>
      </View>
      {renderDescPicture()}
      <View style={styles.btnContainer}>
        {!image ? (
          <CustomButton
            text={'Take Picture'}
            style={styles.tablePictureBtn}
            textStyle={styles.tablePictureBtnText}
            handleClick={handleTakePictureClick}
          />
        ) : (
          renderSubmitAndRetake()
        )}
      </View>
    </ScreenWrapperContainer>
  );
};

export default ProfilePicture;
