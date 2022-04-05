
import styled from "styled-components";
import Topo from "./Topo"; 
import Menu from "./Menu";

export default function TelaHistorico(salvarToken) {
    return (<Container>
        <Topo />
        <Header>
            <div className="h1">Histórico</div>
        </Header>
        <Habitos>
        <div className="">Em breve você poderá ver o histórico dos seus hábitos aqui!</div>
        </Habitos> 
        <Menu>
        </Menu>
           </Container>
    )
}
const Container = styled.div`
  min-height: 100vh;
  width: 375px;
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
justify-content: flex-start;
margin-top: 80px;
margin-bottom: 10px;

.h1 {
width: 100px;
height: 29px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}

`
const Habitos = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;


`