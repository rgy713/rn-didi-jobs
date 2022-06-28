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
    },
    headingText: {
      fontSize: 20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      textAlign: 'center',
      color: theme.Colors.black,
    },
    headingDescText: {
      marginTop: 50,
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 5,
    },
    emailInputStyle: {
      width: width * 0.7,
      marginTop: 33,
    },
    continueBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
    },
    continueBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    suggestContainer: {
      width: width * 0.85,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 23,
    },
    suggestion: {
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: theme.Colors.lightGray,
      borderRadius: 46,
    },
    suggestText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
    },
  });
};

export default styles;
