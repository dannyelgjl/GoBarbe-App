import React from "react";
// Components React-Native
import { Image } from "react-native";
// logo
import logoImg from "../../assets/logo.png";
// styles
import { Container } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
}

export default SignIn;
