import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    swipeWrapper: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.Colors.backDrop,
    },
    swipeLayoutContainer: {
      backgroundColor: theme.Colors.primaryBg,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25,
      paddingHorizontal: 12,
      paddingTop: 10,
      alignItems: 'center',
    },
    line: {
      width: 65,
      height: 3,
      alignSelf: 'center',
      marginVertical: 20,
      borderRadius: 2,
      backgroundColor: theme.Colors.modalLine,
    },
    requirementText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size13,
      color: theme.Colors.black,
      lineHeight: 15,
      width: width,
      marginStart: 30,
      marginBottom: 40,
    },
    requirementImagesContainer: {
      flexDirection: 'row',
    },
    requirementImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginHorizontal: 15,
    },
    requirementTextContainerStyle: {
      marginHorizontal: 30,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 40,
      marginBottom: 40,
      marginTop: 30,
      borderColor: theme.Colors.gray,
      borderWidth: 1,
    },
    requirementTextStyle: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size14,
      color: theme.Colors.black,
      lineHeight: 16,
    },
  });
};

export default styles;
