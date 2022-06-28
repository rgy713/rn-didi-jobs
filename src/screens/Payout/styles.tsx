import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: theme.Colors.primaryBg,
      flex: 1,
      paddingBottom: 15,
    },
    innerContainer: {
      paddingHorizontal: 20,
    },
    headingTextCotainer: {
      marginTop: 0,
    },
    headerContainerStyle: {
      paddingLeft: 30,
      paddingTop: 30,
    },
    headingText: {
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      marginBottom: 15,
    },
    methodBlock: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      paddingVertical: 13,
    },
    titleText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size15,
      color: theme.Colors.black,
    },    
    submitBtnWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width,
      paddingBottom: 5,
      position: 'absolute',
      bottom: 0,
    },
    confirmBtn: {
      backgroundColor: '#2ECC71',
      width: width * 0.7,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
      marginBottom: '20%',
    },
    bottomSheetBtn: {
      backgroundColor: '#1730B1',
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.size15,
      borderRadius: 46,
      marginBottom: 10,
    },
    confirmBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
      fontSize: theme.Fonts.Size.size18,
      letterSpacing: 0.04,
      textTransform: 'capitalize',
      fontStyle: 'normal',
    },
    bottomSheetinner: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    Cardtitle: {
      fontFamily: theme.Fonts.Type.robotoBlod,
      fontSize: theme.Fonts.Size.size20,
      fontWeight: theme.Fonts.Weight.bold,
      color: theme.Colors.black,
    },
    bottomSheetContent: {
      width: width,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.Colors.lightGray,
    },
    bottomBtnWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: width,
      marginTop: 20,
      paddingBottom: 5,
    },
  });
};

export default styles;
