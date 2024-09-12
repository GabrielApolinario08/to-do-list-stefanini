import { useState } from 'react'
import './App.css'
import CardTarefa from './components/card-tarefa/cardTarefa'
import CriarModal from './components/criar-modal/criarModal';
import UpdateModal from './components/update-modal/updateModal';
import UseFetchTarefas from './hooks/getData';

function App() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const { data, loading, error } = UseFetchTarefas();

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
          {loading && <p>Carregando tarefas...</p>}
          {error && <p>error</p>}
          {!loading && !error && data.length > 0 ? (
            data.map((tarefa) => (
              <CardTarefa key={tarefa.id} title={tarefa.title} description={tarefa.description} status={tarefa.status} edit={handleOpenModalUpdate} />
            ))
          ) : (!loading && <p>Nenhuma tarefa encontrada.</p>)}
        </div>
      </div>
      {openModalUpdate && <UpdateModal closeModal={handleOpenModalUpdate} />}
      {openModalCreate && <CriarModal closeModal={handleOpenModalCreate} />}
      <button onClick={handleOpenModalCreate} className='criar-btn'>Criar Tarefa</button>
    </div>
  )
}

export default App
