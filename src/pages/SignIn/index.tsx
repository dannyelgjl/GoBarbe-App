import React from "react";
// Components React-Native
import { Image } from "react-native";
// logo
import logoImg from "../../assets/logo.png";
// styles
import { Container, Title } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu Logon</Title>
    </Container>
  );
}

export default SignIn;
