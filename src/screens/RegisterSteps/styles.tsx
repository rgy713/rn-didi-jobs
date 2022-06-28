import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.Colors.primaryBg,
      flex: 1,
    },
    cotainer: {
      flex: 2,
      justifyContent: 'flex-end',
      paddingBottom: 5,
    },
    buttonCotainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 5,
    },
    headingText: {
      textAlign: 'center',
      marginTop: 79,
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      marginBottom: 15,
    },
    subHeadingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size16,
    },
    stepsContainer: {paddingHorizontal: 9, marginTop: 40},
    stepContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 17,
      paddingRight: 12,
      height: 43,
      alignItems: 'center',
      marginBottom: 27,
    },
    taskText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size16,
      color: theme.Colors.black,
    },
    statusText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: 14,
      textAlign: 'center',
    },
    statusCompletedColor: {
      color: theme.Colors.green,
    },
    statusInompleteColor: {
      color: theme.Colors.red,
    },
    statusSkippedColor: {
      color: theme.Colors.gray,
    },
    confirmBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
      alignSelf: 'center',
      marginBottom: 8,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    termsText: {
      textAlign: 'left',
      alignSelf: 'center',
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
      marginBottom: 12,
    },
    termsTextBlue: {
      color: theme.Colors.blue,
      fontWeight: theme.Fonts.Weight.semi,
    },
  });
};

export default styles;
