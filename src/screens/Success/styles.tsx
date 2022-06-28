import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.Colors.primaryBg,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    successImg: {
      width: width * 0.85,
      resizeMode: 'contain',
    },
    titleContainer: {
      marginTop: 20,
    },
    title: {
      width: width,
      textAlign: 'center',
      fontFamily: theme.Fonts.Type.robotoBold,
      color: theme.Colors.black,
      fontSize: theme.Fonts.Size.size20,
      position: 'absolute',
      top: 100,
    },
  });
};

export default styles;
