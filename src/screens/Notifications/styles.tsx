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
      marginTop: 20,
    },
    headingText: {
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      color: theme.Colors.black,
      textAlign: 'center',
      fontWeight: '700',
    },
    itemContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 2,
    },
    itemText: {
      fontSize: theme.Fonts.Size.size14,
      color: theme.Colors.black,
      lineHeight: 20,
      fontWeight: '400',
    },
    listContainer: {
      marginTop: 50,
      width: width * 0.9,
    },
    checked: {fontSize: 20, color: theme.Colors.primary},
    unchecked: {fontSize: 20, color: theme.Colors.black},
  });
};

export default styles;
