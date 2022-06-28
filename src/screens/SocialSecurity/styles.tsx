import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.Colors.primaryBg,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
    },
    container: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingBottom: 5,
    },
    innerContainer: {
      flex: 1,
      justifyContent: 'space-around',
      paddingBottom: 5,
    },
    headingText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size20,
      textAlign: 'center',
      color: theme.Colors.black,
    },
    descContainer: {
      flex: 1,
      paddingHorizontal: 20,
    },
    verifiedImg: {height: 30, width: 24},
    imgTextWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    stepText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 16,
      color: theme.Colors.black,
    },
    btnContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      flexDirection: 'column',
    },
    termsText: {
      textAlign: 'left',
      paddingHorizontal: 21,
      alignSelf: 'flex-end',
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      marginBottom: 18,
      color: theme.Colors.black,
    },
    termsTextBlue: {
      color: theme.Colors.termsBlue,
      fontWeight: theme.Fonts.Weight.bold,
    },
    submitBtnWrapper: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'space-around',
      width: width,
      paddingBottom: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      width: width * 0.72,
      alignSelf: 'center',
      justifyContent: 'space-around',
      marginTop: 30,
      marginBottom: 30,
    },
    inputStyle: {
      width: width * 0.21,
      textAlign: 'center',
    },
    inputStyle2: {
      width: width * 0.19,
      textAlign: 'center',
    },
    inputStyle3: {
      width: width * 0.26,
      textAlign: 'center',
    },
    confirmBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
      marginBottom: 12,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default styles;
