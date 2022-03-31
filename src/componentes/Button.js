import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";


export default function Button({props}){

    return(
        <>
        {isLoading ? <Button1 onClick={login}/>
        :
        <Loading type="submit" >
         <ThreeDots color="white" height="10" />
        </Loading>}
        </>
    )
}

const Button1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
`

const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
`