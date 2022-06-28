import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, Dimensions} from 'react-native';
import AngleRightIcon from '../../assets/icons/AngleRightIcon';
const {width} = Dimensions.get('window');

interface Props {
  handleClick: () => void;
  title: string;
  hideArrow?: boolean;
  titleStyle?: object;
}

const ItemList = (props: Props) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.handleClick}>
      <Text style={[styles.itemText, props.titleStyle]}>{props.title}</Text>
      {!props.hideArrow && <AngleRightIcon />}
    </TouchableOpacity>
  );
};

const useStyles = (theme: any) => {
  return StyleSheet.create({
    itemContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 48,
    },
    itemText: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400',
      color: theme.Colors.black,
    },
  });
};
export default ItemList;
