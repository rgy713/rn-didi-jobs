import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';

const CustomTextInput = (props: any) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <TextInput
      multiline={props.multiline ? props.multiline : false}
      numberOfLines={props.numberOfLines ? props.numberOfLines : 1}
      autoFocus={props.autoFocus ? props.autoFocus : false}
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
      placeholderTextColor="gray"
      editable
      onChange={props.onChange}
    />
  );
};

CustomTextInput.propTypes = {
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.object,
  value: PropTypes.string,
  keyboardType: PropTypes.string,
  fieldRef: PropTypes.any,
  onSubmitEditing: PropTypes.func,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string,
  maxLength: PropTypes.number,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
};

CustomTextInput.defaultProps = {
  fieldRef: null,
  onSubmitEditing: () => {},
  blurOnSubmit: true,
  returnKeyType: null,
  multiline: false,
  numberOfLines: 1,
  onChange: () => {},
};

import {StyleSheet} from 'react-native';

const useStyles = (theme: any) => {
  return StyleSheet.create({
    inputStyle: {
      borderRadius: 46,
      borderWidth: 0.5,
      borderColor: theme.Colors.inputBorder,
      borderStyle: 'solid',
      paddingVertical: 5,
      paddingHorizontal: 15,
      height: 60,
      color: theme.Colors.black,
    },
  });
};

export default CustomTextInput;
