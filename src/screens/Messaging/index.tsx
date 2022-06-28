import {useNavigation, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CopyIcon from '../../assets/icons/CopyIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import EditIcon from '../../assets/icons/EditIcon';
import ForwardIcon from '../../assets/icons/ForwardIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import ReplyIcon from '../../assets/icons/ReplyIcon';
import ReportIcon from '../../assets/icons/ReportIcon';
import SendIcon from '../../assets/icons/SendIcon';
import CustomSwipePopup from '../../components/custom/CustomSwipePopup';
import ScreenWrapperContainer from '../../containers/ScreenWrapperContainer';
import strings from '../../i18n';
import {RootStackParamList} from '../../navigation/StackNavigator';
import useStyles from './styles';

type MessagingVicProps = StackNavigationProp<RootStackParamList, 'Messaging'>;

type MessagType = {
  id: number | null;
  type: string;
  message: string;
  time: string;
  read?: boolean;
};

let msgData: MessagType[] = [
  {
    id: 1,
    type: 'other',
    message:
      'Hey, could you hire me? I am verified and know how to do your job',
    time: '12:25 AM',
  },
  {
    id: 2,
    type: 'own',
    message: 'Sure,1 sec',
    time: '12:26 AM',
    read: true,
  },
];

const reportData = [
  'This is spam',
  'This advocates self harm',
  'This is harrassing me',
  'User is requesting payment outside of KindaJobs',
];
const Messaging = (props: any) => {
  const navigation = useNavigation<MessagingVicProps>();
  const theme = useTheme();
  const styles = useStyles(theme);

  const [showMsgControl, setShowMsgControl] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showReportSent, setShowReportSent] = useState(false);

  const [messageList, setMessageList] = useState<MessagType[]>([]);
  const [inputMsg, setInputMsg] = useState('');

  const [selectedMsg, setSelectedMsg] = useState<MessagType | null>();

  const handleBackBtnPress = () => {
    navigation.goBack();
  };

  const toggleReportSetView = () => {
    setShowReport(false);
    setShowReportSent(true);
  };

  const toggleMsgControlView = (show: boolean) => {
    setShowMsgControl(show);
  };

  const renderOtherMsg = (msg: MessagType) => {
    return (
      <View style={styles.msgContainer} key={msg.id}>
        <TouchableOpacity
          onLongPress={() => {
            setSelectedMsg(msg);
            toggleMsgControlView(true);
          }}
          style={styles.otherBlock}>
          <View style={styles.otherMsgBox}>
            <Text style={styles.otherMsg}>{msg.message}</Text>
          </View>
        </TouchableOpacity>
        <View style={{paddingVertical: 10}}>
          <Text style={styles.dateText}>{msg.time}</Text>
        </View>
      </View>
    );
  };

  const renderOwnMsg = (msg: MessagType) => {
    return (
      <View style={styles.msgContainer} key={msg.id}>
        <TouchableOpacity
          onPress={() => {
            setSelectedMsg(msg);
            toggleMsgControlView(true);
          }}
          style={styles.ownBlock}>
          <View style={styles.ownMsgBox}>
            <Text style={styles.ownMsg}>{msg.message}</Text>
          </View>
        </TouchableOpacity>
        <View style={{paddingVertical: 10, flexDirection: 'column'}}>
          <Text style={styles.dateText}>{msg.time}</Text>
          {msg.read && <Text style={styles.isReadIcon}>☑</Text>}
        </View>
      </View>
    );
  };

  const renderReportItems = (data: string[]) => {
    return data.map((item: string, index: number) => (
      <TouchableOpacity
        style={[styles.ReportTitleBlock, styles.borderBottom]}
        key={index}
        onPress={() => {
          toggleReportSetView();
        }}>
        <Text style={styles.reportContent}>{item}</Text>
      </TouchableOpacity>
    ));
  };

  const addMessageData = () => {
    //TODO: FIX ME
    //get message data from server
    setMessageList(msgData);
  };

  useEffect(() => {
    addMessageData();
  }, []);

  const renderMsg = (data: any) => {
    return data.map((item: any) => {
      return item.type == 'own' ? renderOwnMsg(item) : renderOtherMsg(item);
    });
  };

  const sendMsg = (msg: string) => {
    if (msg) {
      msgData.push({
        id: null,
        type: 'own',
        message: msg,
        time: new Date().toDateString(),
      });
      addMessageData();
      setInputMsg('');
    }
  };

  const handleInputChange = (event: any) => {
    setInputMsg(event);
  };

  const deleteMsg = () => {
    if (selectedMsg) {
      msgData = msgData.filter(
        (msg: MessagType) => msg.id !== selectedMsg.id,
      ) as MessagType[];
      addMessageData();
      setSelectedMsg(null);
      toggleMsgControlView(false);
    }
  };

  return (
    <ScreenWrapperContainer
      isHeader={true}
      mainContainerStyle={styles.mainContainer}
      headerContainerStyle={styles.headerContainerStyle}
      handleLeftBtnPress={handleBackBtnPress}>
      <View style={styles.innerContainer}>
        <View style={styles.headingTextCotainer}>
          <Text style={styles.headingText}>Messaging {'Vic'}</Text>
          <Image
            style={styles.callImg}
            source={require('../../assets/images/Call.png')}
          />
        </View>

        <View style={styles.messageContainer}>
          <View style={styles.dateBlock}>
            <Text style={styles.dateText}>23 Apr 2020</Text>
          </View>

          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImg}
              source={require('../../assets/images/Profile.png')}
            />
          </View>
        </View>

        <ScrollView style={{marginBottom: 50}}>
          <View style={{paddingTop: 10}}>{renderMsg(messageList)}</View>
        </ScrollView>

        <View style={styles.sendMsgContainer}>
          <TouchableOpacity style={{flex: 2}} onPress={() => {}}>
            <PlusIcon />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter text"
            style={{flex: 19, paddingVertical: 12}}
            onChangeText={handleInputChange}
            value={inputMsg}
          />
          <TouchableOpacity style={{flex: 1}} onPress={() => sendMsg(inputMsg)}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </View>

      {showReport && (
        <CustomSwipePopup
          onHide={() => {
            setShowReport(false);
          }}>
          {renderReportItems(reportData)}
        </CustomSwipePopup>
      )}

      {showReportSent && (
        <CustomSwipePopup
          noLine={true}
          onHide={() => {
            setShowReportSent(false);
          }}>
          <View style={styles.ReportTitleBlock}>
            <Text style={styles.reportContent}>{strings.ReportSent}</Text>
          </View>
          <View style={[styles.ReportTitleBlock, {paddingVertical: 10}]}>
            <Text style={styles.reportContent}>
              Thank you for reporting and trying to keep KindaJobs as safe and
              positive as possible!
            </Text>
          </View>
        </CustomSwipePopup>
      )}

      {showMsgControl && (
        <CustomSwipePopup
          noLine={true}
          onHide={() => {
            toggleMsgControlView(false);
            setSelectedMsg(null);
          }}>
          <TouchableOpacity style={styles.controlContainer} onPress={() => {}}>
            <Text style={styles.dateText}>{strings.Reply}</Text>
            <ReplyIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlContainer} onPress={() => {}}>
            <Text style={styles.dateText}>{strings.Forword}</Text>
            <ForwardIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlContainer} onPress={() => {}}>
            <Text style={styles.dateText}>{strings.Copy}</Text>
            <CopyIcon />
          </TouchableOpacity>
          {selectedMsg && selectedMsg.type == 'other' && (
            <TouchableOpacity
              style={styles.controlContainer}
              onPress={() => {
                setShowMsgControl(false);
                setShowReport(true);
              }}>
              <Text style={styles.dateText}>{strings.Report}</Text>
              <ReportIcon />
            </TouchableOpacity>
          )}
          {selectedMsg && selectedMsg.type == 'own' && !selectedMsg.read && (
            <TouchableOpacity
              style={styles.controlContainer}
              onPress={() => {}}>
              <Text style={styles.dateText}>{strings.Edit}</Text>
              <EditIcon />
            </TouchableOpacity>
          )}
          {selectedMsg && selectedMsg.type == 'own' && (
            <TouchableOpacity
              style={styles.controlContainer}
              onPress={deleteMsg}>
              <Text style={styles.dateText}>{strings.Delete}</Text>
              <DeleteIcon />
            </TouchableOpacity>
          )}
        </CustomSwipePopup>
      )}
    </ScreenWrapperContainer>
  );
};

export default Messaging;
