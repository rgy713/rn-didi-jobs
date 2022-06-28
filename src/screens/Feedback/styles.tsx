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
      backgroundColor: 'transparent',
    },
    containers: {
      flex: 1,
      alignItems: 'center',
      paddingBottom: 5,
      marginTop: 20,
    },
    headingText: {
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      textAlign: 'center',
      fontWeight: '700',
      color: theme.Colors.black,
    },
    confirmBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      marginHorizontal: 20,
      borderRadius: 46,
      alignSelf: 'center',
      marginBottom: 30,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.text,
      textAlign: 'center',
    },
    feedbackContainer: {
      marginVertical: 38,
      flex: 1,
      alignItems: 'flex-start',
    },
    feedbackInputStyle: {
      height: '100%',
      maxHeight: height * 0.5,
      width: width * 0.75,
      marginHorizontal: 40,
      borderRadius: 0,
      padding: 10,
      textAlignVertical: 'top',
      alignSelf: 'center',
    },
  });
};

export default styles;
