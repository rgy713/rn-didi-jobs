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
      marginTop: 50,
    },
    headingText: {
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoBold,
      textAlign: 'center',
      fontWeight: theme.Fonts.Weight.blod,
      color: theme.Colors.black,
    },
    listContainer: {
      marginTop: 42,
      width: width * 0.9,
      paddingHorizontal: 15,
    },
  });
};

export default styles;
