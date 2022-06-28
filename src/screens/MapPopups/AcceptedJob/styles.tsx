import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    jobLayoutContainer: {
      backgroundColor: theme.Colors.primaryBg,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      paddingTop: 10,
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
    },
    headerRowContainer: {
      width: width,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    usernameContainer: {
      marginHorizontal: 10,
    },
    usernameText: {
      fontSize: theme.Fonts.Size.size20,
      lineHeight: 24,
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    reviewContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 4,
    },
    rating: {
      fontSize: theme.Fonts.Size.size11,
      lineHeight: 14,
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      marginHorizontal: 4,
    },
    profileImage: {
      width: 62,
      height: 62,
      marginHorizontal: 10,
    },
    bottomButtonsRow: {
      marginTop: 10,
      flexDirection: 'row',
      marginBottom: 12,
      width: width,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    actionBtnContainer: {
      alignItems: 'flex-end',
    },
    actionBtn: {
      backgroundColor: theme.Colors.lightGray,
      width: width * 0.28,
      height: 43,
      justifyContent: 'center',
      borderRadius: 46,
    },
    actionBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 16,
      color: theme.Colors.black,
      textAlign: 'center',
    },
  });
};

export default styles;
