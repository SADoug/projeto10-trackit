import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.production.min";
import styled from "styled-components";

export default function TelaCadastro() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [foto, setFoto] = useState("");
    //const navigate = useNavigate();

function cadastrar() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, {
        email: email,
        nome: nome,
        image: foto,
        password: senha
    });
    promise.then(response => {
        const { data } = response;
        console.log(data);
//navigate("./");
    });
    promise.catch(err => console.log(err.response));
}

    return (
        <Container>
            <input typeof="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input typeof="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input typeof="text" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <input typeof="text" placeholder="Foto" value={foto} onChange={(e) => setFoto(e.target.value)} />
            <Button onClick={cadastrar}>Cadastrar</Button>
            
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
`;

const Button = styled.div`

`