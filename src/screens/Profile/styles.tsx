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
      marginTop: 22,
    },
    headingText: {
      fontSize: theme.Fonts.Size.size20,
      fontFamily: theme.Fonts.Type.robotoNormal,
      textAlign: 'center',
      fontWeight: '700',
      color: theme.Colors.black,
    },
    nameText: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 17,
      fontFamily: theme.Fonts.Type.robotoBold,
      textAlign: 'center',
      fontWeight: '700',
      marginTop: 16,
      color: theme.Colors.black,
    },
    listContainer: {
      marginTop: 22,
      width: width * 0.9,
      paddingHorizontal: 15,
    },
    reviewContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    rating: {
      fontSize: theme.Fonts.Size.size15,
      lineHeight: 17,
      fontFamily: theme.Fonts.Type.robotoBold,
      marginHorizontal: 4,
      color: theme.Colors.black,
    },
    reviewCount: {
      fontSize: theme.Fonts.Size.size16,
      lineHeight: 24,
      fontFamily: theme.Fonts.Type.robotoMedium,
      marginStart: 8,
      color: theme.Colors.blue,
    },
    profileImage: {
      width: 62,
      height: 62,
      marginTop: 22,
    },
  });
};

export default styles;
