import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";


export default function TelaInicial() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [isLoading, setIsloading] = useState(true)

    const navigate = useNavigate();

    function login() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        setIsloading(false);
        const promise = axios.post(URL, {
            email, // email: email
            password: senha
        });
        promise.then(response => {

            const { data } = response;
            console.log(data);

            navigate("/hoje");
        })
        promise.catch(err => {alert("Insira dados válidos")
        setIsloading(true)})
    }

    return (<Container>
        <Logo />
      
        <input typeof="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input typeof="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        {isLoading ? 
        <Button onClick={login}/>
        :
        <Loading type="submit" >
         <ThreeDots color="white" height="10" />
        </Loading>}
        <StyledLink to="/cadastro">Não possui uma conta? Cadastre-se</StyledLink>
           </Container>
    )
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

const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
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
`
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