import React from "react";
// Components React-Native
import { Image } from "react-native";
// Components
import Input from "../../components/Input";
import Button from "../../components/Button";
// Icon
import Icon from "react-native-vector-icons/Feather";
// logo
import logoImg from "../../assets/logo.png";
// styles
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText
} from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />

        <Title>Faça seu Logon</Title>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button onPress={() => { }}>Entrar</Button>

        <ForgotPassword>
          <ForgotPasswordText onPress={() => { }}>
            Esqueci minha senha
        </ForgotPasswordText>
        </ForgotPassword>
      </Container>

      <CreateAccountButton onPress={() => { }}>
        <Icon name="log-in" size={20} color="#FF9000" />
        <CreateAccountButtonText>Criar uma Conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
}

export default SignIn;
