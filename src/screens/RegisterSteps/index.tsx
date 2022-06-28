import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../components/custom/CustomButton';
import Configs from '../../constants/Configs';
import {
  BANKING,
  DRIVER_LICENSE,
  MY_SKILLS,
  PROFILE_PICTURE,
  SOCIAL_SECURITY,
  SUCCESS,
} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import {getFromAsyncStorage, setInAsyncStorage} from '../../utils';
import useStyles from './styles';

type RegisterStepsNavProps = StackNavigationProp<
  RootStackParamList,
  'RegisterSteps'
>;

type RegiserationStepProps = {
  isDisabled: boolean;
  name: string;
  status: number;
  routeName: string;
  value1?: string;
  value2?: string;
};

const RegisterSteps = (props: any) => {
  const navigation = useNavigation<RegisterStepsNavProps>();
  const theme = useTheme();
  const styles = useStyles(theme);
  const [firstName, setFirstNme] = useState<string>('');
  const [registrationSteps, setRegistrationSteps] = useState<any>([]);

  useEffect(() => {
    setItemInAsyncStorage();
  }, []);

  const setItemInAsyncStorage = async () => {
    const userName = await getFromAsyncStorage('username');
    if (userName?.firstname) {
      setFirstNme(userName.firstname);
    }

    let dataFromStorage = await getFromAsyncStorage('registrationSteps');
    if (!dataFromStorage) {
      let steps: RegiserationStepProps[] = [
        {
          isDisabled: false,
          name: strings.ProfilePicture,
          routeName: PROFILE_PICTURE,
          status: 0,
        },
        {
          isDisabled: false,
          name: strings.SocialSecurityNumber,
          routeName: SOCIAL_SECURITY,
          status: 0,
          value1: '',
        },
        {
          isDisabled: false,
          name: strings.DriversLicense,
          routeName: DRIVER_LICENSE,
          status: 0,
        },
        {
          isDisabled: false,
          name: strings.Banking,
          routeName: BANKING,
          status: 0,
          value1: '',
          value2: '',
        },
      ];

      setRegistrationSteps(steps);
      setInAsyncStorage('registrationSteps', steps);
    } else {
      setRegistrationSteps(dataFromStorage);
    }
  };

  const handleUpdateStepData = (task: RegiserationStepProps) => {
    const selectedStepIndex = registrationSteps.findIndex(
      (step: RegiserationStepProps) => step.routeName === task.routeName,
    );
    let tempStepData: RegiserationStepProps[] = [...registrationSteps];
    //TODO Fix me
    tempStepData[selectedStepIndex] = task;
    setRegistrationSteps(tempStepData);
    setInAsyncStorage('registrationSteps', tempStepData);
  };

  const getStatusColorClassName = (status: number) => {
    switch (status) {
      case 0:
        return {...styles.statusText, ...styles.statusInompleteColor};
      case 1:
        return {...styles.statusText, ...styles.statusCompletedColor};
      case 2:
        return {...styles.statusText, ...styles.statusSkippedColor};
      default:
        return {...styles.statusText, ...styles.statusCompletedColor};
    }
  };

  const onsubmit = () => {
    const checkFail = registrationSteps.find((task: any) => {
      return task.status === 0;
    });

    if (checkFail) {
      Alert.alert(strings.Error, strings.PleaseCompltedAllDetails);
    } else {
      //TODO Fix me
      navigation.push(SUCCESS, {
        title: 'Account Created',
        nextScreen: MY_SKILLS,
      } as any);
    }
  };

  return (
    <ScreenWrapperContainer
      isHeader={false}
      mainContainerStyle={styles.mainContainer}>
      <View style={styles.cotainer}>
        <Text style={styles.headingText}>
          {strings.Hey}, {firstName}!
        </Text>
        <Text style={styles.subHeadingText}>
          {strings.FinishTheseToGetStarted}
        </Text>
        <View style={styles.stepsContainer}>
          {registrationSteps.map((task: any) => {
            return (
              <TouchableOpacity
                key={task.name}
                onPress={() =>
                  navigation.navigate(task.routeName, {
                    task,
                    handleUpdateStepData,
                  })
                }
                style={styles.stepContainer}>
                <Text style={styles.taskText}>{task.name}</Text>
                <Text style={getStatusColorClassName(task.status)}>
                  {Configs.RegisterStatus[task.status]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.buttonCotainer}>
        <CustomButton
          text={strings.Submit}
          style={styles.confirmBtn}
          textStyle={styles.confirmBtnText}
          handleClick={onsubmit}
        />
        <Text style={styles.termsText}>
          {strings.ByCompletingTheseStepsYouAgreeToOur}
          <Text style={styles.termsTextBlue}> {strings.TermsOfService} </Text>
        </Text>
      </View>
    </ScreenWrapperContainer>
  );
};

export default RegisterSteps;
