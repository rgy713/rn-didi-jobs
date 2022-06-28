import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import {
  BANKING,
  BANK_ACCOUNT,
  DELETE_ACCOUNT,
  DRIVER_LICENSE,
  FEEDBACK,
  GET_STARTED,
  HELP_SCREEN,
  INPUT_EMAIL,
  INPUT_LOCATION,
  INPUT_NAME,
  LOGIN,
  MAP_AREA,
  MAP_DRAWER,
  MESSAGES,
  MESSAGING,
  MY_JOBS,
  MY_SKILLS,
  NOTIFICATIONS,
  PAYMENT_OVERVIEW,
  PAYOUT,
  PROFILE,
  PROFILE_PICTURE,
  REGISTER_STEPS,
  SETTINGS_SCREEN,
  SOCIAL_SECURITY,
  SUCCESS,
  VERIFY_OTP,
} from '../constants/ScreensName';
import Login from '../screens/Login';
import VerifyOtp from '../screens/VerifyOtp';
import InputEmail from '../screens/InputEmail';
import InputName from '../screens/InputName';
import InputLocation from '../screens/InputLocation';
import RegisterSteps from '../screens/RegisterSteps';
import ProfilePicture from '../screens/ProfilePicture';
import SocialSecurity from '../screens/SocialSecurity';
import DriverLicense from '../screens/DriverLicense';
import Banking from '../screens/Banking';
import MySkills from '../screens/MySkills';
import MapArea from '../screens/MapArea';
import {MapDrawer} from './MapDrawer';
import MyJobs from '../screens/MyJobs';
import PaymentOverview from '../screens/PaymentOverview';
import Messages from '../screens/Messages';
import Messaging from '../screens/Messaging';
import Payout from '../screens/Payout';
import BankAccount from '../screens/BankAcount';
import Success from '../screens/Success';
import HelpScreen from '../screens/HelpScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Profile from '../screens/Profile';
import DeleteAccount from '../screens/DeleteAccount';
import Notifications from '../screens/Notifications';
import Feedback from '../screens/Feedback';

export type RootStackParamList = {
  [GET_STARTED]: undefined;
  [LOGIN]: undefined;
  [VERIFY_OTP]: undefined;
  [INPUT_EMAIL]: undefined;
  [INPUT_NAME]: undefined;
  [INPUT_LOCATION]: undefined;
  [REGISTER_STEPS]: undefined;
  [PROFILE_PICTURE]: undefined;
  [SOCIAL_SECURITY]: undefined;
  [DRIVER_LICENSE]: undefined;
  [BANKING]: undefined;
  [MY_SKILLS]: undefined;
  [MAP_AREA]: undefined;
  [MAP_DRAWER]: undefined;
  [MY_JOBS]: undefined;
  [PAYMENT_OVERVIEW]: undefined;
  [MESSAGES]: undefined;
  [MESSAGING]: undefined;
  [PAYOUT]: undefined;
  [BANK_ACCOUNT]: undefined;
  [SUCCESS]: undefined;
  [HELP_SCREEN]: undefined;
  [SETTINGS_SCREEN]: undefined;
  [PROFILE]: undefined;
  [DELETE_ACCOUNT]: undefined;
  [NOTIFICATIONS]: undefined;
  [FEEDBACK]: undefined;
};

const StackNagigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={GET_STARTED}>
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={GET_STARTED}
        component={GetStarted}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={LOGIN}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={VERIFY_OTP}
        component={VerifyOtp}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={INPUT_EMAIL}
        component={InputEmail}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={INPUT_NAME}
        component={InputName}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={INPUT_LOCATION}
        component={InputLocation}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={REGISTER_STEPS}
        component={RegisterSteps}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={PROFILE_PICTURE}
        component={ProfilePicture}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SOCIAL_SECURITY}
        component={SocialSecurity}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={DRIVER_LICENSE}
        component={DriverLicense}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={BANKING}
        component={Banking}
      />
      <Stack.Screen
        options={({route}) => ({
          headerShown: false,
          gestureEnabled: route.params?.goBack ? true : false,
        })}
        name={MY_SKILLS}
        component={MySkills}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MAP_AREA}
        component={MapArea}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={MAP_DRAWER}
        component={MapDrawer}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MY_JOBS}
        component={MyJobs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={PAYMENT_OVERVIEW}
        component={PaymentOverview}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MESSAGES}
        component={Messages}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MESSAGING}
        component={Messaging}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={PAYOUT}
        component={Payout}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={BANK_ACCOUNT}
        component={BankAccount}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={SUCCESS}
        component={Success}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={HELP_SCREEN}
        component={HelpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SETTINGS_SCREEN}
        component={SettingsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={PROFILE}
        component={Profile}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={DELETE_ACCOUNT}
        component={DeleteAccount}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={NOTIFICATIONS}
        component={Notifications}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={FEEDBACK}
        component={Feedback}
      />
    </Stack.Navigator>
  );
};

export default StackNagigator;
