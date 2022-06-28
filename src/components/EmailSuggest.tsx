import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface EmailSuggestProps {
  email: string;
  styles: any;
  textStyles: any;
  handleSuggestionClick: (email: string) => void;
}

const EmailSuggest = (props: EmailSuggestProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.handleSuggestionClick(props.email)}
      style={props.styles}>
      <Text style={props.textStyles}>{props.email}</Text>
    </TouchableOpacity>
  );
};

export default EmailSuggest;
