import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

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
      marginTop: 10,
    },
    headingText: {
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontWeight: theme.Fonts.Weight.bold,
      color: theme.Colors.black,
      textAlign: 'center',
    },
    contactContainer: {
      flexDirection: 'row',
      marginTop: 5,
    },
    contact: {
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
    },
    contactNumber: {
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.blue,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
    },
    secondHeadingStyle: {
      fontSize: theme.Fonts.Size.size12,
      lineHeight: 18,
      fontFamily: theme.Fonts.Type.robotoBold,
      marginTop: 5,
      color: theme.Colors.black,
    },
    inputStyle: {
      fontSize: theme.Fonts.Size.size12,
      fontWeight: theme.Fonts.Weight.semi,
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
    },
    inputContainer: {
      marginTop: 22,
    },
    itemContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 8,
      marginVertical: 2,
    },
    itemText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size14,
      lineHeight: 20,
      fontWeight: '400',
      color: theme.Colors.black,
    },
    listContainer: {
      marginTop: 20,
      width: width * 0.9,
    },
    answerContainer: {
      marginHorizontal: 10,
      backgroundColor: theme.Colors.lightGray,
      padding: 8,
    },
  });
};

export default styles;
