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
      justifyContent: 'flex-end',
    },
    logoImg: {
      width: width * 0.85,
      resizeMode: 'contain',
    },
    getStartBtn: {
      backgroundColor: theme.Colors.primaryBtn,
      width: width * 0.85,
      padding: 19,
      fontSize: theme.Fonts.Size.Size16,
      fontWeight: theme.Fonts.Weight.full,
      borderRadius: 46,
      marginBottom: 12,
    },
    getStartBtnText: {
      fontFamily: theme.Fonts.Type.robotoBlack,
      color: theme.Colors.text,
      textAlign: 'center',
    },
  });
};

export default styles;
