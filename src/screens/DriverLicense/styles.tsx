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
      marginTop: 100,
      alignItems: 'center',
    },
    headingText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size16,
      textAlign: 'center',
      color: theme.Colors.black,
    },
    stepsContainer: {
      marginTop: 35,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBox: {
      backgroundColor: theme.Colors.circleGray,
      height: 163,
      width: width * 0.7,
      borderRadius: 34,
      borderWidth: 1.5,
      marginTop: 25,
      overflow: 'hidden',
    },
    img: {
      flex: 1,
    },
    stepHeading: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size16,
      lineHeight: 16,
      marginBottom: 15,
      color: theme.Colors.black,
    },
    stepText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size16,
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
      fontFamily: theme.Fonts.Type.robotoNormal,
      textAlign: 'center',
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 20,
      paddingHorizontal: 29,
      marginBottom: 20,
      color: theme.Colors.black,
    },
    takePictureBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
    },
    takePictureBtnText: {
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
      width: width* 0.46,
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
