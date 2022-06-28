import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import BellBigIcon from '../../assets/icons/BellBigIcon';
import UnmuteBellIcon from '../../assets/icons/UnmuteBellIcon';
import BellIcon from '../../assets/icons/BellIcon';
import CustomDialogPopUp from '../../components/custom/CustomDialogPopup';
import {MESSAGING} from '../../constants/ScreensName';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';
import CustomSwipePopup from '../../components/custom/CustomSwipePopup';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type MessagesNavProps = StackNavigationProp<RootStackParamList, 'Messages'>;

type UserName = {
  firstName: string;
  lastName: string;
};
type DataType = {
  id: number;
  userName: UserName;
  avatar: string;
  message: string;
  sendDate: string;
  muted: boolean;
};

let data = [] as DataType[];
for (let i = 0; i < 8; i += 1) {
  const item = {
    id: i,
    userName: {firstName: 'Vic', lastName: 'Rinb'},
    avatar: 'Profile.png',
    message: 'Message',
    sendDate: '04 APR 2021',
    muted: i > 3,
  };
  data.push(item);
}

const Messages = (props: any) => {
  const navigation = useNavigation<MessagesNavProps>();
  const theme = useTheme();
  const styles = useStyles(theme);

  const [messageData, setMessageData] = useState<DataType[]>([]);
  const [selectedItem, setSelectedItem] = useState<DataType | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showMuteDialog, setShowMuteDialog] = useState(false);
  const [showDeleteMuteDialog, setShowDeleteMuteDialog] = useState(false);
  const [muted, setMuted] = useState(false);

  const btnWidth = 60;

  let row: Array<any> = [];
  let prevOpenedRow: any;

  const getMessageData = () => {
    //TODO: FIX ME
    //get message data from server
    setMessageData(data);
  };

  useEffect(() => {
    getMessageData();
  }, []);

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const toggleDeleteMuteDialog = (item?: any) => {
    if (!showDeleteMuteDialog && item) {
      setSelectedItem(item);
      setMuted(item.muted);
    } else {
      setSelectedItem(null);
      setMuted(false);
    }
    setShowDeleteMuteDialog(!showDeleteMuteDialog);
  };

  const toggleDeleteDialog = (item?: any) => {
    if (!showDeleteMuteDialog) {
      if (!showDeleteDialog && item) {
        setSelectedItem(item);
      } else {
        setSelectedItem(null);
      }
    }
    setShowDeleteDialog(!showDeleteDialog);
  };

  const onDeleteConfirmPress = () => {
    if (selectedItem) {
      //TODO: FIX ME
      const newData = [];
      for (const item of messageData) {
        if (item.id !== selectedItem.id) {
          newData.push(item);
        }
      }
      setMessageData(newData);
    }
    setShowDeleteDialog(false);
    setShowDeleteMuteDialog(false);
  };

  const toggleMuteDialog = (item?: any) => {
    if (!showDeleteMuteDialog) {
      if (!showMuteDialog && item) {
        setSelectedItem(item);
      } else {
        setSelectedItem(null);
      }
    }
    setShowMuteDialog(!showMuteDialog);
  };

  const onMuteConfirmPress = () => {
    if (selectedItem) {
      //TODO: FIX ME
      const newData = [];
      for (const item of messageData) {
        if (item.id === selectedItem.id) {
          item.muted = true;
        }
        newData.push(item);
      }
      setMessageData(newData);
    }
    setShowMuteDialog(false);
    setShowDeleteMuteDialog(false);
  };

  const onUnmuteConfirmPress = () => {
    if (selectedItem) {
      //TODO: FIX ME
      const newData = [];
      for (const item of messageData) {
        if (item.id === selectedItem.id) {
          item.muted = false;
        }
        newData.push(item);
      }
      setMessageData(newData);
    }
    setShowDeleteMuteDialog(false);
  };

  const SwipableItem = (props: any) => {
    const item = props.item;
    const index = props.index;

    const closeRow = (index: number) => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = () => {
      return (
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              toggleDeleteDialog(item);
            }}
            style={styles.btn}>
            <Image
              style={{width: 22, height: 22}}
              source={require('../../assets/images/Delete.png')}
            />
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <View style={styles.container}>
        <Swipeable
          renderRightActions={renderRightActions}
          onSwipeableOpen={() => closeRow(index)}
          ref={ref => (row[index] = ref)}
          rightThreshold={btnWidth}>
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(MESSAGING);
              }}
              onLongPress={() => toggleDeleteMuteDialog(item)}
              style={styles.itemContainer}>
              <View style={styles.itemRow}>
                <View style={styles.itemAvatar}>
                  <Image
                    source={require('../../assets/images/Profile.png')}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <View style={{paddingLeft: 12}}>
                  <Text style={styles.itemTitle}>
                    {item.userName?.firstName} {item.userName?.lastName}
                  </Text>
                  <Text style={styles.itemSubTitle}>{item.message}</Text>
                </View>
              </View>
              <View style={styles.dateBox}>
                <View style={styles.dateView}>
                  <Text style={[styles.itemSubTitle, {color: 'black'}]}>
                    {item.sendDate}
                  </Text>
                  <View style={styles.hideIcon}>
                    {item.muted && <BellIcon />}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Swipeable>
      </View>
    );
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={styles.headingTextCotainer}>
          <Text style={styles.headingText}>{strings.Messages}</Text>
        </View>
        <FlatList
          style={styles.viewContainer}
          data={messageData}
          renderItem={v => SwipableItem(v)}
          keyExtractor={(_item, index) => `message ${index}`}></FlatList>
      </GestureHandlerRootView>

      {showDeleteDialog && (
        <CustomDialogPopUp
          title={strings.AreYouSure}
          text={`You are going to delete this chat with ${selectedItem?.userName?.firstName}.`}
          onCancelPress={toggleDeleteDialog}
          onConfirmPress={onDeleteConfirmPress}></CustomDialogPopUp>
      )}

      {showMuteDialog && (
        <CustomDialogPopUp
          title={strings.AreYouSure}
          text={`You are going to hide this chat with ${selectedItem?.userName?.firstName}.`}
          onCancelPress={toggleMuteDialog}
          onConfirmPress={onMuteConfirmPress}></CustomDialogPopUp>
      )}

      {showDeleteMuteDialog && (
        <CustomSwipePopup noLine={true} onHide={toggleDeleteMuteDialog}>
          {muted ? (
            <TouchableOpacity
              onPress={() => {
                setShowDeleteMuteDialog(false);
                onUnmuteConfirmPress();
              }}
              style={styles.toggleTab}>
              <View style={styles.toggleMenueItem}>
                <Text style={styles.toggleMenuTitle}>{strings.Unmute}</Text>
                <View style={styles.toggleMenuIcon}>
                  <UnmuteBellIcon />
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setShowDeleteMuteDialog(false);
                toggleMuteDialog();
              }}
              style={styles.toggleTab}>
              <View style={styles.toggleMenueItem}>
                <Text style={styles.toggleMenuTitle}>{strings.Mute}</Text>
                <View style={styles.toggleMenuIcon}>
                  <BellBigIcon />
                </View>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => {
              setShowDeleteMuteDialog(false);
              toggleDeleteDialog();
            }}
            style={styles.toggleTab}>
            <View style={styles.toggleMenueItem}>
              <Text style={styles.toggleMenuTitle}>{strings.Delete}</Text>
              <View style={styles.toggleMenuIcon}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../assets/images/Delete.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
        </CustomSwipePopup>
      )}
    </ScreenWrapperContainer>
  );
};

export default Messages;
