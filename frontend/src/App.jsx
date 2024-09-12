import { useEffect, useState } from 'react'
import './App.css'
import CardTarefa from './components/card-tarefa/cardTarefa'
import CriarModal from './components/criar-modal/criarModal';
import UpdateModal from './components/update-modal/updateModal';
import UseFetchTarefas from './hooks/getData';
import UseDeleteTarefa from './hooks/deleteData';

function App() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const { data, loading, error } = UseFetchTarefas();
  const [tarefas, setTarefas] = useState([])
  const { deleteTarefa } = UseDeleteTarefa();

  useEffect(() => {
    if (data) {
      setTarefas(data)
    }
  }, [data])

  const handleOpenModalCreate = () => {
    setOpenModalCreate((prev) => !prev)
  }

  const handleOpenModalUpdate = () => {
    setOpenModalUpdate((prev) => !prev)
  }

  const handleAddTarefa = (newTarefa) => {
    setTarefas((prevTarefas) => [...prevTarefas, newTarefa]);
    setOpenModalCreate(false)
  }

  const handleDelete = async (id) => {
    if (window.confirm("Quer deletar essa tarefa? ")) {
      if (await deleteTarefa(id)) {
        setTarefas((prev) => prev.filter((tarefa) => tarefa.id !== id))
      }
    }
  }

  return (
    <div className='container'>
      <div className='container-tarefas'>
        <h1>Lista de Tarefas</h1>
        <div className='tarefas'>
          {loading && <p>Carregando tarefas...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && (tarefas.length > 0 ? (
            tarefas.map((tarefa) => (
              <CardTarefa key={tarefa.id} title={tarefa.title} description={tarefa.description} status={tarefa.status} edit={handleOpenModalUpdate} del={() => handleDelete(tarefa.id)} />
            ))
          ) : (
            <p>Nenhuma tarefa encontrada.</p>
          ))}
        </div>
      </div>
      {openModalUpdate && <UpdateModal closeModal={handleOpenModalUpdate} />}
      {openModalCreate && <CriarModal closeModal={handleOpenModalCreate} addNewTarefa={handleAddTarefa} />}
      <button onClick={handleOpenModalCreate} className='criar-btn'>Criar Tarefa</button>
    </div>
  )
}

export default App
