import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import CustomListItem from '../../components/custom/CustomListItem';
import {NOTIFICATIONS, PROFILE} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';

import useStyles from './styles';

type SettingsNavProp = StackNavigationProp<
  RootStackParamList,
  'SettingsScreen'
>;

const SettingsScreen = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<SettingsNavProp>();

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapperContainer
      handleLeftBtnPress={handleBackBtnPress}
      headerContainerStyle={styles.headerContainerStyle}
      isHeader={true}
      mainContainerStyle={styles.mainContainer}>
      <View style={styles.containers}>
        <Text style={styles.headingText}>{strings.Settings}</Text>
        <View style={styles.listContainer}>
          <CustomListItem
            handleClick={() => {
              navigation.navigate(PROFILE);
            }}
            title={strings.Profile}
          />
          <CustomListItem
            handleClick={() => {
              navigation.navigate(NOTIFICATIONS);
            }}
            title={strings.Notifications}
          />
          <CustomListItem handleClick={() => {}} title={strings.Legal} />
          <CustomListItem
            handleClick={() => {}}
            title={strings.AboutKindaJobs}
          />
        </View>
      </View>
    </ScreenWrapperContainer>
  );
};

export default SettingsScreen;
