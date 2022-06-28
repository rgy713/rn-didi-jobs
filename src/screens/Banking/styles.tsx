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
    container: {
      flex: 4,
      marginTop: 20,
      justifyContent: 'space-around',
      paddingBottom: 5,
    },
    headingText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size20,
      textAlign: 'center',
      color: theme.Colors.black,
    },
    detailsContainer: {
      paddingTop: 80,
      alignItems: 'center',
    },
    inputStyle: {
      width: width * 0.75,
      marginTop: 12,
    },
    btnContainer: {
      flex: 3,
      justifyContent: 'flex-end',
      marginBottom: 12,
    },
    submitBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width,
    },
    skipBtn: {
      backgroundColor: theme.Colors.lightGray,
      width: width * 0.46,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
    },
    skipBtnText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    confirmBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.46,
      padding: 19,
      fontSize: theme.Fonts.Size.size16,
      borderRadius: 46,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default styles;
