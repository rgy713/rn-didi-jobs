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
    headingTextCotainer: {
      marginTop: 70,
    },
    headingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      marginBottom: 8,
    },
    subHeadingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size16,
    },
    stepsContainer: {
      paddingHorizontal: 9,
      marginTop: 40,
      maxHeight: height * 0.5,
      overflow: 'hidden',
    },
    btnContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    termsText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size12,
      marginBottom: 15,
      color: theme.Colors.black,
    },
    termsTextBlue: {
      color: theme.Colors.termsBlue,
      fontWeight: theme.Fonts.Weight.bold,
    },
    submitBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingBottom: 5,
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
    leftBtn: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      marginLeft: 30,
    },
  });
};

export default styles;
