import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface CustomDropdownProps {
  menu: any;
  handleClick: (keyname: string) => void;
}

const CustomDropdown = (props: CustomDropdownProps) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <View key={props.menu?.name}>
      <TouchableOpacity
        key={props?.menu?.name}
        style={styles.stepContainer}
        onPress={() => {
          props.handleClick(props.menu?.name);
        }}>
        <Text
          style={
            props.menu?.subMenu ? styles.taskHeadingText : styles.taskItemText
          }>
          {props.menu?.name}
        </Text>
        {!props.menu?.subMenu &&
          (props.menu?.check ? (
            <Text style={styles.checked}>☑</Text>
          ) : (
            <Text style={styles.unchecked}>☐</Text>
          ))}
        {props.menu?.subMenu && (
          <Image
            style={styles.arrowDown}
            source={require('../../assets/images/ArrowDown.png')}
          />
        )}
      </TouchableOpacity>
      {props.menu?.isSubMenuVisible &&
        props.menu?.subMenu?.map((item: any) => (
          <CustomDropdown
            handleClick={props.handleClick}
            key={item?.name}
            menu={item}
          />
        ))}
    </View>
  );
};

CustomDropdown.propTypes = {
  menu: PropTypes.any,
  handleClick: PropTypes.func,
};

CustomDropdown.defaultProps = {
  menu: {},
  handleClick: () => {},
};

const useStyles = (theme: any) => {
  return StyleSheet.create({
    stepContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 17,
      paddingRight: 12,
      height: 43,
      alignItems: 'center',
    },
    taskHeadingText: {
      fontFamily: theme.Fonts.Type.robotoBold,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
    },
    taskItemText: {
      fontFamily: theme.Fonts.Type.robotoNormal,
      fontSize: theme.Fonts.Size.size12,
      color: theme.Colors.black,
    },
    arrowDown: {
      width: 12,
      height: 8,
      resizeMode: 'contain',
    },
    checked: {fontSize: 20, color: theme.Colors.primary},
    unchecked: {fontSize: 20, color: theme.Colors.black},
  });
};

export default CustomDropdown;
