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
      backgroundColor: 'transparent',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 5,
    },
    headingText: {
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      textAlign: 'center',
      color: theme.Colors.black,
    },
    headingDescText: {
      marginTop: 50,
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
    },
    codeInputFieldStyle: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 5,
      borderColor: theme.Colors.gray,
      color: theme.Colors.black,
      backgroundColor: 'transparent',
    },
    optStyle: {width: 221, height: 100, backgroundColor: 'transparent'},
    resendCodeText: {
      color: theme.Colors.blue,
      fontSize: theme.Fonts.Size.size16,
      fontFamily: theme.Fonts.Type.robotoBold,
    },
    continueBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
      marginBottom: 80,
    },
    continueBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default styles;
