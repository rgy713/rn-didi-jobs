import {StyleSheet} from 'react-native';

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.Colors.primaryBg,
      flex: 1,
      paddingBottom: 15,
    },
    headingTextCotainer: {},
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
    stepsContainer: {paddingHorizontal: 30, marginTop: 40},
    stepContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 17,
      paddingRight: 12,
      height: 43,
      alignItems: 'center',
      marginBottom: 27,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
    },
    assemble: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontWeight: theme.Fonts.Weight.semi,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
      color: theme.Colors.black,
    },
    contain: {
      color: theme.Colors.black,
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
    },
    textColor: {
      color: theme.Colors.black,
    },
    itemRow1: {
      paddingVertical: 7,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemRow2: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    pendingText: {
      color: theme.Colors.black,
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size8,
      backgroundColor: theme.Colors.lightGray,
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 24,
      alignSelf: 'flex-end',      
    },
  });
};

export default styles;
