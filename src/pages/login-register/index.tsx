import React from "react";
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from '../../config/firebase-config'
import {toast } from '../../utils/toast'
import {
  Input,
  LoginContainer,
  LoginWrapper,
  Form,
  Title,
  ButtonLogin,
  Layout,
  Redirect,
  Illustration
} from "./style";
import Background from '../../components/img/login-bg.svg';
import LoginIllustration from '../../components/img/login-illustration.png';
import RegisterIllustration from '../../components/img/register-illustration.png';

type formType = "login" | "register";

const Login: React.FC = () => {
  const [formType, setFormType] = React.useState<formType>("login");
  const [username, setUsername] = React.useState<string | null | undefined>('');
  const [password, setPassword] = React.useState<string | null | undefined>('');
  const [buttonStatus, setButtonStatus] = React.useState(true);
  const history = useHistory();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setButtonStatus(true)
      e.preventDefault();
      const payload = {
        email: username,
        password: password,
      }
      const result = await loginUser(payload);
      if (result) {
        setUsername('');
        setPassword('');
        history.push('/home');
        
      }
    } catch (error) {
      toast({message: error.message})
    } finally {
      setButtonStatus(false)
    }
  }

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setButtonStatus(true)
      const payload = {
        email: username,
        password: password,
      }
      const result = await registerUser(payload);
      if (result) {
        setUsername('');
        setPassword('');
        history.push('/registration-post');
      }
    } catch (error) {
      toast({message: error.message})
    } finally {
      setButtonStatus(false)
    }
  }

  const handleUsernameInput = (value: string | null | undefined) => {
    setUsername(value)
    setButtonStatus(false)
  }

  const handlePasswordInput = (value: string | null | undefined) => {
    setPassword(value)
    setButtonStatus(false)
  }

  const registerForm = () => {
    setFormType('register');
    setUsername('');
    setPassword('');
  }

  const loginForm = () => {
    setFormType('login');
    setUsername('');
    setPassword('');
  }

  const titleText = formType === 'login' ? "Masuk" : "Daftar";
  const buttonText = formType === 'login' ? "Login" : "Daftar";
  const redirectText = formType === 'login' ? 'kamu belum punya akun? daftar' : 'kamu sudah punya akun? masuk';
  const illustration = formType === 'login' ? LoginIllustration : RegisterIllustration;
  
  return (
    <Layout>
        <LoginContainer background={Background}>
          <Illustration src={illustration} />
          <LoginWrapper>
          <Title>{titleText}</Title>
            <Form onSubmit={formType === 'login' ? (e) => login(e) : (e) => register(e)}>
              <Input color="light" name='username' onIonChange={(e) => handleUsernameInput(e.detail.value) } value={username} placeholder="Email" type="email" />
              <Input color="light" name='password' onIonChange={(e) => handlePasswordInput(e.detail.value) } value={password} placeholder="Password" type="password" />
              <ButtonLogin disabled={buttonStatus} expand="full" shape="round" type="submit">
                {buttonText}
              </ButtonLogin>
            </Form>
            <Redirect>
              
              <h6 onClick={() => formType ==='login' ? registerForm() : loginForm() }>
                {redirectText}
              </h6>
              
            </Redirect>
          </LoginWrapper>
        </LoginContainer>
    </Layout>
  );
};

export default Login;
