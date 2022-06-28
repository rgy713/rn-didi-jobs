import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    headerRowContainer: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    usernameText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size14,
      color: theme.Colors.black,
      lineHeight: 24,
      textAlign: 'center',
    },
    profileImage: {
      width: 55,
      height: 55,
    },
    reviewContainer: {
      width: width,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
    },
    rating: {
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 14,
      fontFamily: theme.Fonts.Type.robotoBold,
      marginHorizontal: 4,
    },
    reviewCount: {
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 14,
      fontFamily: theme.Fonts.Type.robotoBold,
      marginStart: 8,
      color: theme.Colors.blue,
      paddingVertical: 3,
    },
    report: {
      position: 'absolute',
      right: 40,
      alignItems: 'flex-end',
      paddingHorizontal: 20,
    },
    jobTitleContainer: {
      width: width,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 30,
      marginTop: 20,
    },
    jobFeeContainer: {
      flexDirection: 'row',
    },
    jobUnder: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    jobFee: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
      textAlign: 'center',
      color: theme.Colors.green,
      paddingHorizontal: 2,
    },
    jobTitle: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      textAlign: 'center',
      width: width,
      position: 'absolute',
    },
    jobType: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
      textAlign: 'center',
      marginTop: 8,
    },
    jobEstTime: {
      fontSize: theme.Fonts.Size.size15,
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
      textAlign: 'center',
      marginTop: 20,
    },
    jobDistance: {
      fontSize: theme.Fonts.Size.size15,
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
      textAlign: 'center',
      marginTop: 8,
    },
    bottomButtonsRow: {
      marginTop: 58,
      marginBottom: 12,
      flexDirection: 'row',
      width: width,
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    actionBtnContainer: {
      alignItems: 'flex-end',
    },
    equipmentBtn: {
      backgroundColor: theme.Colors.blue,
      width: width * 0.46,
      paddingHorizontal: 10,
      height: 45,
      justifyContent: 'center',
      borderRadius: 46,
    },
    requirementBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.46,
      paddingHorizontal: 2,
      height: 45,
      justifyContent: 'center',
      borderRadius: 46,
    },
    bottomBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontWeight: theme.Fonts.Weight.bold,
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 17,
      color: theme.Colors.white,
      textAlign: 'center',
    },
  });
};

export default styles;
