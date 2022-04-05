
import styled from "styled-components";
import Topo from "./Topo"; 
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./Usecontext";
import axios from "axios";
import Habitoshoje from "./Habitoshoje";
import dayjs from 'dayjs';


export default function TelaHoje() {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const { token } = useContext(UserContext)
    const config = {
        headers: { "Authorization": `Bearer ${token}`}
    }
    const [ reload, setReload ] = useState(); 

    
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then((result) => {
            console.log(result.data)
            setRender(result.data)
            setReload()
        })
        promise.catch((err) => {
            alert("Problema");
            console.log(err)
        })
    }, [reload])
    
    const[render, setRender] = useState([]);

    return (<Container>
        <Topo>
        <div className="title">TrackIt</div>
        <div className="imagem">Imagem</div>
        </Topo>
        <Header>
        <Div>
                    {days.map((day, index) => {
                        if (days.indexOf(day) == dayjs().day()) {
                            return (
                                <p key={index}> {day}, {dayjs().format('DD/MM')}</p>
                            )
                        }
                    })}
                </Div>
        </Header>
        <Habitos>
        <div>
                    {render.map((elemento) => { 
                        
                        return (
                     <Habitoshoje habitos={elemento} />
                     ) })}
                </div>
        </Habitos> 
        <Menu>
            <div>Hábitos</div>
            <div>Hoje</div>
            <div>Histórico</div>
        </Menu>
           </Container>
    )
}


const Div = styled.div`
width: 100%;
height: 29px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;`;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5e5e5;
  
`;
const Header = styled.div`
 width: 100%;
height: 29px;
display: flex;
justify-content: space-around;
margin-top: 80px;

`
const Habitos = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;


`