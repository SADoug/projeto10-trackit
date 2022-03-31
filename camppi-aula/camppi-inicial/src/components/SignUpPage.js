import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import BigLogo from "./BigLogo";
import Button from "./Button";
import Input from "./Input";

export default function LoginPage() {
  const [city, setCity] = useState("BH");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [senha, setSenha] = useState("");

  // const [dados, setDados] = useState({
  //   city: "",
  //   nome: "",
  //   email: "",
  //   imagem: "",
  //   senha: ""
  // })

  const navigate = useNavigate();

  function cadastrar() {
    const URL = "https://mock-api.driven.com.br/api/v2/camppi/auth/sign-up";
    const promise = axios.post(URL, {
      name: nome,
      password: senha,
      email: email,
      image: imagem,
      city: city
    });
    promise.then(response => {
      const {data} = response;
      console.log(data);
      navigate("/");
    });
    promise.catch(err => console.log(err.response));
  }

  return (
    <Container>
      <BigLogo />
      <Input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <Input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="text" placeholder="Imagem" value={imagem} onChange={(e) => setImagem(e.target.value)}/>
      <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
      <Grid>
        <Button active={city === 'BH'} onClick={() => setCity("BH")}>BH</Button>
        <Button active={city === 'RJ'} onClick={() => setCity("RJ")}>RJ</Button>
        <Button active={city === 'SP'} onClick={() => setCity("SP")}>SP</Button>
      </Grid>
      <Button onClick={cadastrar}>Cadastrar</Button>
      <StyledLink to="/">Já possui uma conta? Faça login</StyledLink>
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

const Grid = styled.div`
  display: flex;
  width: 100%;

  *:not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
`;
