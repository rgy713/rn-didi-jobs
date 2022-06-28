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
    innerContainer: {
      marginTop: 20,
      alignItems: 'center',
    },
    headingText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size20,
      textAlign: 'center',
      color: theme.Colors.black,
    },
    stepsContainer: {
      marginTop: 35,
      paddingHorizontal: 30,
    },
    imageCircle: {
      backgroundColor: theme.Colors.circleGray,
      height: 232,
      width: 232,
      borderRadius: 200,
      borderWidth: 1.5,
      marginTop: 25,
      overflow: 'hidden',
    },
    img: {
      flex: 1,
    },
    stepHeading: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 16,
      marginBottom: 15,
      marginStart: 10,
      color: theme.Colors.black,
    },
    stepText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 20,
      color: theme.Colors.black,
    },
    btnContainer: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'row',
      paddingBottom: 5,
    },
    submitBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width,
      marginBottom: 12,
    },
    submitMessageText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 20,      
      paddingHorizontal: 19,
      marginBottom: 20,
      color: theme.Colors.black,
      alignSelf: 'center',
    },
    tablePictureBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
      marginBottom: 12,
    },
    tablePictureBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    retakeBtn: {
      backgroundColor: theme.Colors.lightGray,
      width: width * 0.46,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
    },
    retakeBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    submitBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.46,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,      
    },
    submitBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default styles;
