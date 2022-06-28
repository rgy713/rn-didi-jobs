import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.Colors.primaryBg,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 5,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
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
    phoneNumberFlagBtn: {
      width: 'auto',
    },
    phoneNumberContainer: {
      borderRadius: 46,
      borderWidth: 0.5,
      borderColor: 'rgba(0, 0, 0, 0.39)',
      borderStyle: 'solid',
      paddingVertical: 2,
      paddingHorizontal: 10,
      marginTop: 33,
      width: width * 0.7,
    },
    phoneNumberText: {
      paddingLeft: 0,
      backgroundColor: 'transparent',
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
