import './App.css'
import Cabecalho from './componentes/Cabecalho'
import Evento from './componentes/Evento'
import Galeria from './componentes/Galeria'
import Rodape from './componentes/Rodape'

function App() {
  return (
    <div> 
      <Cabecalho/>
      <Evento
    titulo={"Evento do senai"}
    descricao={"descricao do evento"}
    horario={"Das 15:00 as 17:00"}
    local={"Local do evento"}/>
    <Galeria/>
    <Rodape/>
    </div>
  )
}

export default App
