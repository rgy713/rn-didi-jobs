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
      marginTop: 0,
    },

    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
    },
    headingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      marginBottom: 15,
    },
    contentBlock: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    contentBlockinner: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    radioBtn: {
      width: 20,
      height: 20,
      marginRight: 10,
      backgroundColor: theme.Colors.lightGray,
      borderRadius: 250,
      overflow: 'hidden',
    },
    selected: {
      backgroundColor: '#2ECC71',
    },
    submitBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width,
      marginBottom: 12,
      position: 'absolute',
      bottom: 0,
    },
    confirmBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    firstBottomSheetBlock: {
      width: '100%',
      height: '90%',
      display: 'flex',
      backgroundColor: 'white',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      justifyContent: 'space-between',
      overflow: 'hidden',
    },
    inputContainer: {
      flex: 4,
    },
    bottomSheetinner: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    Cardtitle: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: theme.Fonts.Size.size20,
      lineHeight: 23,
      color: theme.Colors.black,
    },
    cardContent: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 25,
      color: theme.Colors.black,
    },
    cardFieldTitle: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size16,
      lineHeight: 19,
      color: theme.Colors.black,
      paddingLeft: 10,
    },
    inputStyle: {
      width: width * 0.85,
      marginTop: 3,
      borderWidth: 1,
    },
    popupBtnWrapper: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      bottom: 10,
    },
    confirmPopUpBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
    },
    confirmPopUpBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default styles;
