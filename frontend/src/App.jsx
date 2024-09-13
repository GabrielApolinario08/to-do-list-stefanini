import { useEffect, useState } from 'react'
import './App.css'
import CardTarefa from './components/card-tarefa/cardTarefa'
import ModalCreate from './components/modal/modalCreate';
import ModalUpdate from './components/modal/modalUpdate';
import useDeleteTarefa from './hooks/deleteData';
import useFetchTarefas from './hooks/getData';

function App() {
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const { data, loading, error } = useFetchTarefas();
  const [tarefas, setTarefas] = useState([])
  const { deleteTarefa } = useDeleteTarefa();
  const [tarefaToUpdate, setTarefaToUpdate] = useState(null)
  const [updateTarefa, setUpdateTarefa] = useState(null)

  useEffect(() => {
    if (data) {
      setTarefas(data)
    }
  }, [data])

  useEffect(() => {
    if (updateTarefa) {
      setTarefas((prev) => 
        prev.map(tarefa => 
          tarefa.id === updateTarefa.id ? updateTarefa : tarefa
        )
      );
      setUpdateTarefa(null);
    }
  }, [updateTarefa]);

  const handleOpenModalCreate = () => {
    setOpenModalCreate((prev) => !prev)
  }

  const handleOpenModalUpdate = (tarefa) => {
    setTarefaToUpdate(tarefa)
    setOpenModalUpdate((prev) => !prev)
  }

  const handleAddTarefa = (newTarefa) => {
    setTarefas((prevTarefas) => [...prevTarefas, newTarefa]);
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
              <CardTarefa key={tarefa.id} 
              title={tarefa.title} 
              description={tarefa.description} 
              status={tarefa.status} 
              edit={() => handleOpenModalUpdate(tarefa)} 
              del={() => handleDelete(tarefa.id)} />
            ))
          ) : (
            <p>Nenhuma tarefa encontrada.</p>
          ))}
        </div>
      </div>
      {openModalUpdate && <ModalUpdate closeModal={() => setOpenModalUpdate(false)} tarefa={tarefaToUpdate} setUpdateTarefa={setUpdateTarefa}/>}
      {openModalCreate && <ModalCreate closeModal={handleOpenModalCreate} addNewTarefa={handleAddTarefa} />}
      <button onClick={handleOpenModalCreate} className='btn-create-tarefa'>Criar Tarefa</button>
    </div>
  )
}

export default App
