
import { useState } from "react";
import Bloco from "./components/Bloco";
import Header from "./components/Header";
import Msg from "./components/Msg";
import Propriedade from "./components/Propriedade";


function App() {
  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');

  return (<>
    <Header />
    <Msg>oi</Msg>
    <Bloco>
      <p>bom dia</p>
      <div>o sol já nasceu lá na fazendinha</div>
    </Bloco>
    <Propriedade rotulo="Nome" value={nome} set={setNome}/>
    <Propriedade rotulo="Idade" value={idade} set={setIdade}/>
  </>);
}


export default App;
