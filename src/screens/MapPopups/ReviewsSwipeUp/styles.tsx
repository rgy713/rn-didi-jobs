import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    headerContainer: {
      paddingHorizontal: 15,
    },
    itemRow : {
      width: width,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 30,
      paddingVertical: 6,      
    },
    itemTitle: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black
    },
    itemText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black
    },
    listBox: {
      height: height * 0.4,
      marginVertical: 20,
      paddingHorizontal: 15,
    },
    innerContainer: {
      marginBottom: 15,
    },
    ratings: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    star: {
      paddingHorizontal: 5
    },
    feedbackText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black
    }
  });
};

export default styles;
