import React from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

const CustomSearchTextInput = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <View style={[styles.inputContainer, props.inputContainer]}>
      <TextInput
        autoFocus={props.autoFocus}
        style={[styles.inputStyle, props.inputStyle]}
        onChangeText={props.handleChange}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        value={props.value}
        ref={props.fieldRef}
        onSubmitEditing={props.onSubmitEditing}
        blurOnSubmit={props.blurOnSubmit}
        returnKeyType={props.returnKeyType}
        maxLength={props.maxLength ? props.maxLength : 500}
      />
      <TouchableOpacity
        style={styles.searchIconContainer}
        onPress={props.onSubmitEditing}>
        <Text style={{fontSize: 14}}>🔍</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomSearchTextInput.propTypes = {
  autoFocus: PropTypes.bool,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.object,
  inputContainer: PropTypes.object,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  fieldRef: PropTypes.any,
  onSubmitEditing: PropTypes.func,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string,
  maxLength: PropTypes.number,
};

CustomSearchTextInput.defaultProps = {
  autoFocus: true,
  fieldRef: null,
  onSubmitEditing: () => {},
  blurOnSubmit: true,
  returnKeyType: null,
};

const useStyles = (theme: any) => {
  return StyleSheet.create({
    inputContainer: {
      width: width * 0.6,
      height: 40,
      backgroundColor: theme.Colors.lightGray,
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    inputStyle: {
      height: 40,
    },
    searchIconContainer: {
      justifyContent: 'center',
      padding: 5,
    },
  });
};

export default CustomSearchTextInput;
