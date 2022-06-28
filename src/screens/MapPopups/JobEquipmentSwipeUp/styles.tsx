import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = (theme: any) => {
  return StyleSheet.create({
    equipmentListItem: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size13,
      color: theme.Colors.black,
      lineHeight: 15,
      width: width,
      marginStart: 20,
      marginBottom: 40,
    },
  });
};

export default styles;
