
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./TelaInicial";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico"
import UserContext from "./Usecontext";
import { useState } from "react";
import Logo from "./Logo";



function App() {
 const [token, setToken] = useState("");
 const [foto, setFoto] = useState("");
 const [ porcentagem, setPorcentagem ] = useState("")
 const [valorporcentagem, setValorPorcentagem] = useState("")

  
  return (
    <UserContext.Provider value={{token, setToken, setFoto, foto, porcentagem, setPorcentagem, valorporcentagem, setValorPorcentagem}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />}/>
        <Route path="/cadastro" element={<TelaCadastro/>}/>
        <Route path="/habitos" element={<TelaHabitos/>}/>
        <Route path="/hoje" element={<TelaHoje/>}/> 
        <Route path="/historico" element={<TelaHistorico/>}/>
        <Route path="/Logo" element={<Logo/>}/>
      </Routes>
    </BrowserRouter>
   </UserContext.Provider>
  )
}

export default App;

//salvarToken={(token) => setToken(token)