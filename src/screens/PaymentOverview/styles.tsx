import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.Colors.primaryBg,
      flex: 1,
      paddingBottom: 15,
    },
    headingTextCotainer: {
      marginTop: 50,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
    },
    line: {
      width: 65,
      height: 3,
      alignSelf: 'center',
      marginTop: 30,
      borderRadius: 2,
      backgroundColor: theme.Colors.modalLine,
    },
    headingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      marginBottom: 15,
    },
    subHeadingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size15,
    },
    stepsContainer: {paddingHorizontal: 25, marginTop: 40},
    containerBlock: {
      paddingVertical: 7,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    assemble: {
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontWeight: theme.Fonts.Weight.semi,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
    },
    contain: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
    },
    submitBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width,
      paddingBottom: 5,
      position: 'absolute',
      bottom: 0,
    },
    confirmBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
      marginBottom: 12,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    swipeWrapper: {
      height: height,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.Colors.backDrop,
    },
    bottomSheetBlock: {
      width: '100%',
      height: '90%',
      backgroundColor: theme.Colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      overflow: 'hidden',
      paddingBottom: 12,
    },
    bottomSheetinner: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardTitle: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      fontSize: theme.Fonts.Size.size20,
      lineHeight: 23,
      color: theme.Colors.black,
      paddingBottom: 20,
    },
    contentText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      color: theme.Colors.black,
      paddingVertical: 15,
    },
    ReportTitleBlock: {
      width: width,
      paddingVertical: 20,
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
    ratingBlock: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    ratingText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 13,
      alignItems: 'center',
      color: theme.Colors.black,
      paddingLeft: 5,
    },
    bottomBtnBlock: {
      display: 'flex',
      alignItems: 'center',
      paddingVertical: 10,
    },
    profileImg: {
      width: 68,
      height: 68,
    },
    cardTextContainer: {
      paddingVertical: 30,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bottomButtonsRow: {
      marginTop: 40,
      flexDirection: 'row',
      marginBottom: 12,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    callBtn: {
      backgroundColor: theme.Colors.lightGray,
      width: width * 0.46,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    callBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    messageBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.46,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    messageBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default styles;
