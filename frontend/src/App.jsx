import './App.css'
import CardTarefa from './components/card-tarefa/cardTarefa'

function App() {

  return (
    <div className='container'>
      <div className='container-tarefas'>
        <h1>Lista de Tarefas</h1>
        <div className='tarefas'>
          <CardTarefa/>
          <CardTarefa/>
          <CardTarefa/>
          <CardTarefa/>
          <CardTarefa/>
        </div>
      </div>
    </div>
  )
}

export default App
