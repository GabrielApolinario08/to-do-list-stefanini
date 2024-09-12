import { useState } from 'react'
import './App.css'
import CardTarefa from './components/card-tarefa/cardTarefa'
import CriarModal from './components/criar-modal/criarModal';

function App() {

  const [abrirModal, setAbrirModal] = useState(false);

  const handleOpenModal = () => {
    setAbrirModal(!abrirModal)
  }

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
      {abrirModal && <CriarModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal} className='criar-btn'>Criar Tarefa</button>
    </div>
  )
}

export default App
