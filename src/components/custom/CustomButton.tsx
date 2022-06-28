import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props.handleClick} style={props.style}>
      <Text style={props.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default CustomButton;
