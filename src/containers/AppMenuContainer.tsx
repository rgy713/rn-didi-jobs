import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FeedbackIcon from '../assets/icons/FeedbackIcon';
import HelpIcon from '../assets/icons/HelpIcon';
import MessageIcon from '../assets/icons/MessageIcon';
import MyjobsIcon from '../assets/icons/MyjobsIcon';
import MySkillIcon from '../assets/icons/MySkillIcon';
import SettingIcon from '../assets/icons/SettingIcon';
import {
  FEEDBACK,
  HELP_SCREEN,
  MESSAGES,
  MY_JOBS,
  MY_SKILLS,
  PAYOUT,
  PROFILE,
  SETTINGS_SCREEN,
} from '../constants/ScreensName';
import strings from '../i18n';
import AppTheme from '../utils/theme/AppTheme';

const AppMenuContainer = (props: any) => {
  const styles = useStyles(AppTheme);

  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>
        <View style={styles.profileName}>
          <Text style={styles.userName}>David</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(PROFILE);
            }}>
            <Text style={styles.viewProfile}>{strings.ViewProfile}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageCircle}>
          <ImageBackground
            resizeMode="cover"
            style={styles.img}
            source={require('../assets/images/Profile.png')}
          />
        </View>
      </View>
      <View style={styles.tabList}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(MY_JOBS);
          }}
          style={styles.listBlock}>
          <MyjobsIcon />
          <Text style={styles.listTitle}>{strings.MyJobs}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(MESSAGES);
          }}
          style={styles.listBlock}>
          <MessageIcon />
          <Text style={styles.listTitle}>{strings.Messages}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(PAYOUT);
          }}
          style={styles.listBlock}>
          <Image source={require('../assets/images/Payout.png')} />
          <Text style={styles.listTitle}>{strings.Payout}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(HELP_SCREEN);
          }}
          style={styles.listBlock}>
          <HelpIcon />
          <Text style={styles.listTitle}>{strings.Help}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate(SETTINGS_SCREEN);
          }}
          style={styles.listBlock}>
          <SettingIcon />
          <Text style={styles.listTitle}>{strings.Settings}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.push(MY_SKILLS, {
              goBack: true,
            } as any);
          }}
          style={styles.listBlock}>
          <MySkillIcon />
          <Text style={styles.listTitle}>{strings.MySkills}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(FEEDBACK);
        }}
        style={styles.listBlock}>
        <FeedbackIcon />
        <Text style={styles.listTitle}>{strings.Feedback}</Text>
      </TouchableOpacity>
    </View>
  );
};

const useStyles = (theme: any) => {
  return StyleSheet.create({
    container: {
      paddingTop: 20,
    },
    profileBlock: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 25,
      borderBottomWidth: 1.5,
      borderColor: theme.Colors.lightGray,
    },
    profileName: {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    userName: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontWeight: theme.Fonts.Weight.low,
      fontSize: theme.Fonts.Size.size18,
      lineHeight: 21,
      color: theme.Colors.black,
    },
    viewProfile: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontWeight: theme.Fonts.Weight.low,
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 13,
      color: theme.Colors.gray,
      paddingTop: 8,
    },
    imageCircle: {
      backgroundColor: '#E2E8F0',
      height: 70,
      width: 70,
      borderRadius: 200,
      borderWidth: 0.4,
      overflow: 'hidden',
    },
    img: {
      flex: 1,
    },
    tabList: {
      paddingVertical: 10,
      borderBottomColor: theme.Colors.lightGray,
      borderBottomWidth: 1.5,
    },
    listBlock: {
      display: 'flex',
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    listTitle: {
      paddingLeft: 20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontWeight: theme.Fonts.Weight.low,
      fontSize: theme.Fonts.Size.size16,
      lineHeight: 19,
      color: theme.Colors.black,
    },
  });
};

export default AppMenuContainer;
