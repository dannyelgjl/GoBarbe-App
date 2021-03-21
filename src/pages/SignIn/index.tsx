import React from "react";
// Components React-Native
import { Image } from "react-native";
// Components
import Input from "../../components/Input";
import Button from "../../components/Button";
// logo
import logoImg from "../../assets/logo.png";
// styles
import { Container, Title } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu Logon</Title>

      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button onPress={() => { }}>Entrar</Button>
    </Container>
  );
}

export default SignIn;
