
import styled from "styled-components";
import Topo from "./Topo";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { useContext } from "react";
import UserContext from "./Usecontext";
import axios from "axios";
import vector from "./../assets/Vector.png"



export default function TelaHabitos() {
    const [habitonovo, setHabitonovo] = useState(false)
    const [dias, setDias] = useState([]);
    const [clicou, setClicou] = useState({ domingo: false, segunda: false, terça: false, quarta: false, quinta: false, sexta: false, sabado: false })
    const [input, setInput] = useState("")

    /*  const { atualiza, setAtualiza} = useContext(AtualizaContext);*/ //Estudar para ver pois essa função esta atualizando globalmente o numero de habitos
    const { token } = useContext(UserContext)
    console.log({ token })

    const parametrosPost = {

        name: input,
        days: dias
    };
    console.log(parametrosPost);

    const config = {

        headers: { "Authorization": `Bearer ${token}` }
    }
    console.log(config);

    function toggle(valor, dia) {
        if (dias.includes(valor)) {
            for (let i = 0; i < dias.length; i++) {
                if (dias[i] === valor) {
                    dias.splice(i, 1);
                    setClicou({ ...clicou, [dia]: false });
                }
            }
        } else {
            setDias([...dias, valor]);
            setClicou({ ...clicou, [dia]: true });
        }
    }

    const [id, setId] = useState();
    const [reload, setReload] = useState(true);
    function enviarHabito() {
        /*e.preventDefault();*/
        if (dias.length !== 0) {
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
                parametrosPost,
                config
            );
            promise.then(response => {
                const { data } = response;
                console.log(data)
                setId(data.id)
                setHabitonovo(false);
                setHabitos(habitos + 1)
                /*  setAtualiza(atualiza + 1);*/
                setReload(!reload)
            })
            promise.catch(() => alert("Não foi possivel salvar o hábito"))
        } else {
            alert("Por favor, selecione pelo menos um dia da semana!")
        }
    }

    const [render, setRender] = useState([]);
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promise.then((result) => {
            console.log(result.data)
            setHabitos(result.data)
            setRender(result.data)
        })
        promise.catch((err) => {
            alert("Problema");
        })
    }, [reload])

    const [temhabito, setTemhabito] = useState()
    function deleteHabit(id) {
        const confirm = window.confirm("Deseja excluir o hábito?");
        console.log("deletei");

        if (confirm === true) {
            const promise = axios.delete(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
                config
            );

            promise.then((response) => {
                console.log(response.data);
                setTemhabito(true);
            });
            promise.catch((error) => {
                console.log(error.response);
            });
        }
    }


    const [habitos, setHabitos] = useState();
    console.log(habitos)
    return (<Container>
        <Topo />
        <Header>
            <div className="h1">Meus Hábitos</div>
            <div onClick={() => setHabitonovo(true)} className="icone">+</div>
        </Header>
        <Habitos>
            {habitonovo ?
                <ContainerHabito2>
                    <input typeof="text" placeholder="nome do habito"
                        onChange={(e) => setInput(e.target.value)}
                        required />
                    <Dias className="dias">
                        <Dia selecionado={clicou.domingo} onClick={() => toggle(0, "domingo")}>D</Dia>
                        <Dia selecionado={clicou.segunda} onClick={() => toggle(1, "segunda")}>S</Dia>
                        <Dia selecionado={clicou.terça} onClick={() => toggle(2, "terca")}>T</Dia>
                        <Dia selecionado={clicou.quarta} onClick={() => toggle(3, "quarta")}>Q</Dia>
                        <Dia selecionado={clicou.quinta} onClick={() => toggle(4, "quinta")}>Q</Dia>
                        <Dia selecionado={clicou.sexta} onClick={() => toggle(5, "sexta")}>S</Dia>
                        <Dia selecionado={clicou.sabado} onClick={() => toggle(6, "sabado")}>S</Dia>
                    </Dias>
                    <Botoes >
                        <div onClick={() => setHabitonovo(false)} className="cancelar">Cancelar</div>
                        <div onClick={() => enviarHabito()} className="salvar">Salvar</div>
                    </Botoes>
                </ContainerHabito2> 
                :
                  <div className="nenhum">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}

        </Habitos>
        <div>
            {render.map((elemento) => {
                const { id, name, days } = elemento;
                return (
                    <ContainerHabito>
                        <h1>{name}</h1>
                        <Dias className="dias">
                            <Diah id={0} days={days}>D</Diah>
                            <Diah id={1} days={days}>S</Diah>
                            <Diah id={2} days={days}>T</Diah>
                            <Diah id={3} days={days}>Q</Diah>
                            <Diah id={4} days={days}>Q</Diah>
                            <Diah id={5} days={days}>S</Diah>
                            <Diah id={6} days={days}>S</Diah>
                        </Dias>
                        <Botoes >
                            <img
                                className="trash"
                                src={vector}
                                onClick={() => deleteHabit(elemento.id)}
                            />
                        </Botoes>
                    </ContainerHabito>
                )
            })}
        </div>
        <Menu />
    </Container>
    )
}
const Diah = styled.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
font-family:'Lexend Deca'; 
color: ${props => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
background-color: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"};
${({ id, days }) => days.includes(id) ? "background-color: #CFCFCF" : "background-color: #FFFFFF"}
`;


const Render = styled.div`
        margin-top: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #e5e5e5;
      `;

const Container = styled.div`
  min-height: 100vh;
  width: 375px;
  padding: 31px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5e5e5;
  
`;


const ContainerHabito = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 15px;
display: flex;
flex-direction:column ;


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

h1 {
width: 208px;
height: 25px;
margin-left: 15px;
margin-top: 13px;
margin-bottom:10px ;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */


color: #666666;
}


`;
const ContainerHabito2 = styled.div`
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
border-radius: 5px;}

h1 {
width: 208px;
height: 25px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */


color: #666666;
}


`;


const Dias = styled.div`

    display: flex;
    justify-content: space-around;

`;

const Dia = styled.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
margin-bottom: 10px;
display: flex;
justify-content: center;
color: ${props => props.selecionado ? "#FFFFFF" : "#DBDBDB"};
background-color: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"};

`;

const Botoes = styled.div`
 position: absolute;
img { 

margin-left: 310px;
margin-top: 10px;
width: 13px;
height: 15px;
}
 .cancelar {
width: 69px;
height: 40px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #52B6FF;
margin-right: 10px;
}
.salvar {
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
margin-right: 10px;
}
`;

const Header = styled.div`
 width: 100%;
height: 29px;
display: flex;
justify-content: space-around;
margin-top: 60px;


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

.nenhum {
    margin-top: 29px;
}

`