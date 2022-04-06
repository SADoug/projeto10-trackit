import styled from "styled-components";
import axios from "axios";
import UserContext from "./Usecontext";
import React, { useState, useContext } from "react"
import Vector from "./../assets/Vectorcheck.png"



const URL_CHECK_HABIT = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

export default function Habitoshoje({
    id,
    name,
    completed, 
    highestSequence,
    currentSequence,
}) {
    const {token} = React.useContext(UserContext);
    const [ isComplete, setIsComplete] = React.useState(completed)
    const [cor , setCor ] = useState(true)
console.log(currentSequence)
    function handleSelectHabit() {
        setIsComplete(!isComplete);
        if (!isComplete) {
            setCheckHabit("check");
            setCor(false)
            console.log("to funcionando")
        }else{
            setCheckHabit("uncheck");
            setCor(true)
        }
    }

    function setCheckHabit(finalRoute) {
        const promise = axios({
            method: "post",
            url: `${URL_CHECK_HABIT}${id}/${finalRoute}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        promise.then((response)=>{
            console.log(response)
        })

        promise.catch((err)=>{
            console.log(err)
        })
    }


    return (
        <ContainerHabito3>
            <Div>
                <h1>{name}</h1>
                <h2>Sequência atual: {currentSequence}</h2>
                <h2>Seu recorde: {highestSequence}</h2>
            </Div>
            <Check id={id} done={cor} onClick={handleSelectHabit} >
                <img  src={Vector} />
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
${({ done }) => done ? "background-color: #E7E7E7" : "background-color: #8FC549"
    }}
img {
    width: 35px;
    
    
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

