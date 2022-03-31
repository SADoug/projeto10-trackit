
import styled from "styled-components";
import Topo from "./Topo";
import Menu from "./Menu";
import { useState } from "react/cjs/react.production.min";

export default function TelaInicial() {
   

    return (<Container>
        <Topo>
            <div className="title">TrackIt</div>
            <div className="imagem">Imagem</div>
        </Topo>
        <Header>
            <div className="h1">Meus Hábitos</div>
            <div className="icone">+</div>
        </Header>
        <Habitos>
            <div className="">
               <input></input>
               <input typeof="text" placeholder="habito" />
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
                   <button>Cancelar</button>
                   <button>Cancelar</button>
               </div>
            </div>
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