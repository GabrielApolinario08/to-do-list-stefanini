import { useState } from 'react'
import './App.css'
import CardTarefa from './components/card-tarefa/cardTarefa'
import CriarModal from './components/criar-modal/criarModal';
import UpdateModal from './components/update-modal/updateModal';

function App() {

  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const handleOpenModalCreate = () => {
    setOpenModalCreate((prev) => !prev)
  }

  const handleOpenModalUpdate = () => {
    setOpenModalUpdate((prev) => !prev)
  }

  return (
    <div className='container'>
      <div className='container-tarefas'>
        <h1>Lista de Tarefas</h1>
        <div className='tarefas'>
          <CardTarefa edit={handleOpenModalUpdate}/>
          <CardTarefa edit={handleOpenModalUpdate}/>
          <CardTarefa edit={handleOpenModalUpdate}/>
          <CardTarefa edit={handleOpenModalUpdate}/>
          <CardTarefa edit={handleOpenModalUpdate}/>
      
        </div>
      </div>
      {openModalUpdate && <UpdateModal closeModal={handleOpenModalUpdate}/>}
      {openModalCreate && <CriarModal closeModal={handleOpenModalCreate}/>}
      <button onClick={handleOpenModalCreate} className='criar-btn'>Criar Tarefa</button>
    </div>
  )
}

export default App
