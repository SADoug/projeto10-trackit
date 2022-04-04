import styled from "styled-components";
import axios from "axios";
import UserContext from "./Usecontext";
import { useState, useContext } from "react"


export default function Habitoshoje(habitos){

    const { id, name, done, currentSequence, hightestSequence } = habitos;
    console.log(habitos.habitos.name)

    
    const { token } = useContext(UserContext)
    const config = {

        headers: { "Authorization": `Bearer ${token}` }
    }

    const HabitoFeitoURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/${id}/ID_DO_HABITO/check`
    const HabitoNãoFeitoURL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/${id}/ID_DO_HABITO/uncheck`
    const [habitofeito, setHabitofeito] = useState(done)

function toggleChecaHabito(){
    if(habitofeito){
        axios.post(HabitoNãoFeitoURL, id, config)
        .then(({data}) => {
            setHabitofeito(!habitofeito);
        })
        .catch(error => console.log("desmarcar" + error.response))
    } else {
        axios.post(HabitoFeitoURL, id, config)
        .then(({data}) => {
            setHabitofeito(!habitofeito);
        })
        .catch(error => console.log("marcar" + error.response));
    }
}


    return (
        <ContainerHabito>
                      <h1>{habitos.habitos.name}</h1>
                      <h1>Sequência atual: {habitos.habitos.currentSequence}</h1>
                      <h1>Seu recorde: {habitos.habitos.hightestSequence}</h1>
                      <Check id={habitos.habitos.id} onClick={() => toggleChecaHabito()} >
                          <ion-icon name="checkbox"></ion-icon>
                      </Check> 
                 </ContainerHabito>
    )
}



const Check = styled.div`

width: 69px;
height: 69px;

background-color: red;
border: 1px solid #E7E7E7;
box-sizing: border-box;
border-radius: 5px;

ion-icon {
    ${({done}) => {
return done ? "color: #8FC549" : "color: #EBEBEB"  
}
}}

`;

const ContainerHabito = styled.div`
width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 15px;
display: flex;
flex-direction:column ;
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

