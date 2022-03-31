import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import BigLogo from "./BigLogo";
import Button from "./Button";
import Input from "./Input";

export default function LoginPage({salvarToken}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  
  function login() {
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/login";
    const promise = axios.post(URL, {
      email, // email: email
      password: senha
    });
    promise.then(response => {
      const {data} = response;
      console.log(data);
      salvarToken(data.token);
      navigate("/market");
    })
  }

  return (
    <Container>
      <BigLogo />
      <Input type="text" placeholder="E-mail" value={email} 
        onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Senha" value={senha} 
        onChange={(e) => setSenha(e.target.value)} />
      <Button onClick={login}>Entrar</Button>
      <StyledLink to="/sign-up">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F60919;
`;

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`;
const Input = styled.div`
    width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-bottom: 6px;
font-family: 'Lexend Deca';
font-style: normal;
color: #DBDBDB;
`
