
import styled from "styled-components";
import Topo from "./Topo"; 
import Menu from "./Menu";

export default function TelaHistorico(salvarToken) {
    return (<Container>
        <Topo>
        <div className="title">TrackIt</div>
        <div className="imagem">Imagem</div>
        </Topo>
        <Header>
            <div className="h1">Histórico</div>
        </Header>
        <Habitos>
        <div className="">Em breve você poderá ver o histórico dos seus hábitos aqui!</div>
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

`
const Habitos = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;


`