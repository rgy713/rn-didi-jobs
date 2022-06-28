import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    listItem: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size13,
      fontWeight: '600',
      color: theme.Colors.black,
      lineHeight: 15,      
      marginBottom: 40,
      textAlign: 'center',
    },
  });
};

export default styles;
