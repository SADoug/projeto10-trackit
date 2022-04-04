import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

function Menu(){
    const percentage = 60
    return(<Footer>
        <Link className="habitos" to="/habitos">Habitos</Link>
        <Link to="/hoje">
            <CircularProgressbar className="progressivebar" background={true} backgroundPadding="7" value={percentage} text="Hoje" /> </Link>
        <Link className="historico" to="/historico">Histórico</Link>
        </Footer>
    )
}
const Footer = styled.div`
position: fixed;
width: 375px;
height: 70px;
left: 0px;
bottom: 0px;
right: 0px;
background: #FFFFFF;
display: flex;
justify-content: space-around;
align-items: center;


.habitos {
    
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
}
.historico {
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
    color: #52B6FF;
}

.CircularProgressbar {
    margin: auto;

    position: absolute;
    top: -50px; left: 0; bottom: 0; right: 0;

    max-width: 75px;
    width: 25%;

    transition: all .8s;

    .CircularProgressbar-path {
      stroke: #fff;
    }

    .CircularProgressbar-trail {
      stroke: transparent;
    }

    .CircularProgressbar-text {
      fill: #fff;
    }

    .CircularProgressbar-background {
      fill: #52B6FF;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
}
`;
export default Menu;