import React from 'react';
//Components React-Native
import { TextInputProps } from "react-native";
// styles
import { Container, TextInput, Icon } from './styles';


interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon
        name={icon}
        size={20}
        color="#666360"
      />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360" {...rest}
      />
    </Container>
  );
}

export default Input;
