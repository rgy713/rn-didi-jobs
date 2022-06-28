import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type NotificationNavProp = StackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

interface NotificationProps {}

type NotificationType = {
  id: number;
  title: string;
  checked: boolean;
};

const notificatonData: NotificationType[] = [
  {id: 1, title: 'Messages', checked: true},
  {id: 2, title: 'Denied to a job', checked: true},
  {id: 3, title: 'Special Offers', checked: true},
  {id: 4, title: 'Job cancelled', checked: false},
];

const Notifications = (props: NotificationProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const navigation = useNavigation<NotificationNavProp>();
  const [notificatonList, setNotificationList] = useState<NotificationType[]>(
    [],
  );

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const addNotification = () => {
    setNotificationList(notificatonData);
  };

  useEffect(() => {
    addNotification();
  }, []);

  const toggleNotification = (index: number) => {
    notificatonData[index].checked = !notificatonData[index].checked;
    console.log(index, notificatonData[index].checked);
    addNotification();
  };

  const ListItem = (props: any) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      setChecked(props.item.checked);
    }, []);

    return (
      <View>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => {
            setChecked(!checked);
            props.onClick();
          }}>
          <Text style={styles.itemText}>{props.item.title}</Text>
          {checked ? (
            <Text style={styles.checked}>☑</Text>
          ) : (
            <Text style={styles.unchecked}>☐</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScreenWrapperContainer
      handleLeftBtnPress={handleBackBtnPress}
      headerContainerStyle={styles.headerContainerStyle}
      isHeader={true}
      mainContainerStyle={styles.mainContainer}>
      <View style={styles.containers}>
        <Text style={styles.headingText}>{strings.ManageNotifications}</Text>

        <FlatList
          data={notificatonList}
          renderItem={({item, index}) => (
            <ListItem item={item} onClick={() => toggleNotification(index)} />
          )}
          style={styles.listContainer}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </ScreenWrapperContainer>
  );
};

export default Notifications;
