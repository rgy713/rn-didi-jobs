import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.Colors.primaryBg,
      flex: 1,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
      backgroundColor: 'transparent',
    },
    containers: {
      flex: 1,
      alignItems: 'center',
      paddingBottom: 5,
      marginTop: 30,
    },
    headingText: {
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      textAlign: 'center',
      fontWeight: '700',
      color: theme.Colors.black,
    },
    deleteInfoText: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.red,
      textAlign: 'center',
      marginTop: 36,
    },
    deleteInfoListContainer: {
      justifyContent: 'center',
      marginTop: 10,
      alignItems: 'flex-start',
    },
    deleteInfo: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
      textAlign: 'center',
      color: theme.Colors.black,
    },
    listContainer: {
      marginTop: 30,
      width: width * 0.8,
    },
    itemContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 48,
      paddingVertical: 3,
      alignItems: 'center',
    },
    itemText: {
      width: width * 0.6,
      fontSize: theme.Fonts.Size.size15,
      fontWeight: '400',
      color: theme.Colors.black,
    },
    changeBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width * 0.9,
      height: 49,
      marginTop: 30,
    },
    changeNumberBtn: {
      backgroundColor: theme.Colors.blue,
      width: width * 0.42,
      padding: 10,
      justifyContent: 'center',
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    btnText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 14,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    changeEmailBtn: {
      backgroundColor: theme.Colors.blue,
      width: width * 0.4,
      padding: 10,
      justifyContent: 'center',
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    deleteBtnWrapper: {
      width: width * 0.9,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: 30,
    },
    deleteBtn: {
      backgroundColor: theme.Colors.lightGray,
      width: width * 0.85,
      height: 49,
      padding: 10,
      justifyContent: 'center',
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
      marginBottom: 12,
    },
    deleteBtnText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
      lineHeight: 14,
      textAlign: 'center',
    },
    swipeLayoutContainer: {
      backgroundColor: theme.Colors.white,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      paddingBottom: 40,
    },
    swipeConfirmLayoutContainer: {
      backgroundColor: theme.Colors.white,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      paddingVertical: 40,
    },
    btnContainer: {
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
      flexDirection: 'row',
      paddingBottom: 5,
    },
    submitBtnWrapper: {
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    skipBtn: {
      backgroundColor: theme.Colors.lightGray,
      width: width * 0.42,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    skipBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    confirmBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.42,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    deleteConfirmBtn: {
      backgroundColor: theme.Colors.lightGray,
      width: width * 0.4,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      fontFamily: theme.Fonts.Type.robotoBlack,
      borderRadius: 46,
      color: theme.Colors.black,
    },
    deleteConfirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    deleteCancelBtn: {
      backgroundColor: theme.Colors.red,
      width: width * 0.4,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    deleteCancelBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: 'white',
      textAlign: 'center',
    },
    feedbackContainer: {
      height: height * 0.8,
      alignItems: 'center',
    },
    inputContainer: {
      flex: 1,
      marginVertical: 38,
      alignItems: 'flex-start',
    },
    feedbackInputStyle: {
      height: '100%',
      width: width * 0.75,
      marginHorizontal: 15,
      borderRadius: 0,
      padding: 10,
      textAlignVertical: 'top',
      alignSelf: 'center',
    },
    deleteInfoTextContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    deleteConfirmText1: {
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
      color: theme.Colors.black,
    },
    deleteConfirmText2: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
      color: theme.Colors.red,
    },
    deleteConfirmText3: {
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
      color: theme.Colors.black,
    },
    deleteConfirmText4: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
      color: theme.Colors.black,
    },
    swipeWrapper: {
      height: height,
      position: 'absolute',
      width: '100%',
      backgroundColor: theme.Colors.backDrop,
    },
  });
};

export default styles;