
import styled from "styled-components";
import Topo from "./Topo";
import Menu from "./Menu";
import { useState } from "react/cjs/react.production.min";

export default function TelaInicial() {
   

    return (<Container>
        <Topo />
        <Header>
            <div className="h1">Meus Hábitos</div>
            <div className="icone">+</div>
        </Header>
        <Habitos>
            <ContainerHabito>
               <input typeof="text" placeholder="nome do habito" />
               <div className="dias">
               <div className="dia"></div> 
               <div className="dia"></div>
               <div className="dia"></div>
               <div className="dia"></div>
               <div className="dia"></div>
               <div className="dia"></div>
               <div className="dia"></div>
               <div className="dia"></div>
               <div className="dia"></div>
               <div className="dia"></div>
               </div>
               <div className="botoes">
                   <button className="cancelar">Cancelar</button>
                   <button className="salvar">Salvar</button>
                </div>   
               </ContainerHabito>
            <div className="">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
        </Habitos>
        <Menu>
            <div>Hábitos</div>
            <div>Hoje</div>
            <div>Histórico</div>
        </Menu>
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
  
`;

const ContainerHabito = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;

input {
width: 303px;
height: 45px;
margin-left: 10px;
margin-top: 10px;
margin-bottom: 10px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
}
.dias {
    display: flex;
    justify-content: space-around;
}

.dia{
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-bottom: 10px;
}
.botoes {
    display: flex;
    justify-content: flex-end;
}
.botoes .cancelar {
width: 69px;
height: 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #52B6FF;
}
.botoes .salvar {
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
/* identical to box height */
text-align: center;
color: #FFFFFF;
}
`;

const Header = styled.div`
 width: 100%;
height: 29px;
display: flex;
justify-content: space-around;
margin-top: -450px;

.h1 {
    margin-right: 120px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
/* identical to box height */
color: #126BA5;
}

.icone {

width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
}

`
const Habitos = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
margin-top: 50px;

`