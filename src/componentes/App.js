
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaInicial from "./TelaInicial";
import TelaCadastro from "./TelaCadastro";
import TelaHabitos from "./TelaHabitos";
import TelaHoje from "./TelaHoje";
import TelaHistorico from "./TelaHistorico"
//import { useState } from "react/cjs/react.production.min";



function App() {
 //const [token, setToken] = useState(null);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial />}/>
        <Route path="/cadastro" element={<TelaCadastro/>}/>
        <Route path="/habitos" element={<TelaHabitos/>}/>
        <Route path="/hoje" element={<TelaHoje/>}/> 
        <Route path="/historico" element={<TelaHistorico/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;

//salvarToken={(token) => setToken(token)} 