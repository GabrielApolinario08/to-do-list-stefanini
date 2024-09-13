import axios from "axios"
import { useState } from "react"


const useCreateTarefas = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const createTarefa = async (title, description, status) => {
        const newTarefa = {
            title: title,
            description: description,
            status: status
        }
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:8080/tarefas", newTarefa)
            return response.data;
        } catch (error) {
            setError("Erro ao inserir nova tarefa.")
            console.error("Erro ao inserir dados: ", error)
        } finally {
            setLoading(false)
        }
    }
    return { createTarefa, loading, error }
}

export default useCreateTarefas;