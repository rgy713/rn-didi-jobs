import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.Colors.primaryBg,
      flex: 1,
      paddingBottom: 15,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
    },
    innerContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    },
    headingTextCotainer: {
      marginTop: 0,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    headingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      marginBottom: 10,
      paddingRight: 10,
    },
    messageContainer: {display: 'flex', alignItems: 'center', marginTop: 15},
    callImg: {position: 'absolute', right: '20%', top: 5},
    profileContainer: {marginTop: 10, alignItems: 'center'},
    profileImg: {
      width: 50,
      height: 50,
    },
    msgContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    otherBlock: {
      alignContent: 'center',
    },
    ownBlock: {
      alignContent: 'center',
    },
    otherMsgBox: {
      backgroundColor: '#F7F9FC',
      padding: 10,
      borderRadius: 20,
      maxWidth: width * 0.8,
    },
    otherMsg: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 16,
      color: theme.Colors.black,
    },
    ownMsgBox: {
      backgroundColor: '#0048FF',
      padding: 10,
      borderRadius: 20,
      maxWidth: width * 0.8,
    },
    ownMsg: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size15,
      color: theme.Colors.white,
    },
    dateBlock: {
      backgroundColor: '#F7F9FC',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 20,
    },
    dateText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size15,
      color: '#0F172A',
    },
    isReadIcon: {
      position: 'absolute',
      fontSize: theme.Fonts.Size.size20,
      top: -30,
      right: -120,
    },
    ReportTitleBlock: {
      width: width,
      paddingVertical: 20,
    },
    reportTitle: {
      color: theme.Colors.black,
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size20,
      lineHeight: 24,
    },
    reportContent: {
      color: theme.Colors.black,
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 16,
      paddingHorizontal: 30,
    },
    borderBottom: {
      borderBottomWidth: 1,
      borderBottomColor: theme.Colors.lightGray,
      marginHorizontal: 18,
    },
    sendMsgContainer: {
      backgroundColor: theme.Colors.primaryBg,
      position: 'absolute',
      bottom: 0,
      marginHorizontal: 20,
      borderWidth: 2,
      borderRadius: 30,
      borderColor: theme.Colors.lightGray,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    controlContainer: {
      width: width,
      paddingVertical: 12,
      paddingHorizontal: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    controlIcon: {
      width: 15,
      height: 15,
    },
  });
};

export default styles;
