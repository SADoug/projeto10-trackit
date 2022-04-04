import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";



export default function TelaCadastro() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [foto, setFoto] = useState("");
    const [isLoading, setIsloading] = useState(true)
    const navigate = useNavigate();

    
    

function cadastrar() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    setIsloading(false);
    const promise = axios.post(URL, {
        email: email,
        name: nome,
        image: foto,
        password: senha
    });
    promise.then(response => {
        const { data } = response;
        console.log(data);
        navigate("/");
    });
    promise.catch(err => {alert("Insira dados válidos")
        setIsloading(true)});
}

    return (
        <Container>
            <Logo />
            <input typeof="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input typeof="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input typeof="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <input typeof="text" placeholder="Foto" value={foto} onChange={(e) => setFoto(e.target.value)} />
            {isLoading ? 
        <Button onClick={cadastrar}>Cadastrar</Button>
        :
        <Loading type="submit" >
         <ThreeDots color="white" height="10" />
        </Loading>}
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
background-color: #e5e5e5;

input {
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
}
`;

const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
`
const StyledLink = styled(Link)`
  font-family: 'Lexend Deca';
  height: 17px;
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
margin-top: 25px;
color: #52B6FF;
`;
const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
`