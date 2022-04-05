import styled from "styled-components";
import axios from "axios";
import UserContext from "./Usecontext";
import { useState, useContext } from "react"
import Vectorcheck from "./../assets/Vectorcheck.png"



export default function Habitoshoje(habitos){
    const id = habitos.habitos.id
    const done =  habitos.habitos.done

    
    const { token } = useContext(UserContext)
    const config = {

        headers: { "Authorization": `Bearer ${token}` }
    }

    const HabitoFeitoURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/${id}/check`
    const HabitoNãoFeitoURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/${id}/uncheck`
    const [habitofeito, setHabitofeito] = useState(true)

function toggleChecaHabito(){
    if(done){
        axios.post(HabitoNãoFeitoURL, config)
        .then(({data}) => {
            setHabitofeito(false);
        })
        .catch(error => console.log("desmarcar" + error.response))
    } else {
        axios.post(HabitoFeitoURL, config)
        .then(({data}) => {
            setHabitofeito(true);
        })
        .catch(error => console.log("marcar" + error.response));
    }
}
function testecor(){
    if(habitofeito){
     setHabitofeito(false);
    } else{
        setHabitofeito(true);
    }
}

    return (
        <ContainerHabito3>
            <Div>
                      <h1>{habitos.habitos.name}</h1>
                      <h2>Sequência atual: {habitos.habitos.currentSequence}</h2>
                      <h2>Seu recorde: {habitos.habitos.hightestSequence}</h2>
            </Div>
                      <Check id={habitos.habitos.id} done={habitofeito} onClick={() => testecor()} >
                         <img  src={Vectorcheck} />
                      </Check> 
                 </ContainerHabito3>
    )
}



const Check = styled.div`

width: 69px;
height: 69px;


border: 1px solid #E7E7E7;
box-sizing: border-box;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
${({done}) => done ? "background-color: #8f8f8f" : "background-color: #E7E7E7"  
}
img {
    width: 35px;
    color: red;}
    ${({done}) => done ? "background-color: #E7E7E7" : "background-color: #8fc549"  
}
`;

const Div = styled.div`
h1 {
width: 208px;
height: 25px;
margin-top: 10px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
}
h2 {
   
width: 146px;
height: 32px;
left: 33px;
top: 222px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;

color: #666666;
}
`;

const ContainerHabito3 = styled.div`
width: 340px;
height: 94px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 15px;
display: flex;
justify-content: space-around;

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

}`;

const Botoes = styled.div`
 display: flex;
`;

