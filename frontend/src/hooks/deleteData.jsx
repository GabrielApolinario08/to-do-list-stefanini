import axios from "axios";

const useDeleteTarefa = () => {
    const deleteTarefa = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/tarefas/${id}`)
            return true
        } catch (error) {   
            console.error("Erro ao deletar dados: ", error)
            window.alert("Erro ao deletar tarefa.")
            return false
        }
    }

    return {deleteTarefa}
}

export default useDeleteTarefa