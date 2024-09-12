import axios from "axios"
import { useEffect, useState } from "react"


const UseCreateTarefas = () => {
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
            setError("Erro ao buscar dados.")
            console.error("Erro ao buscar dados: ", error)
        } finally {
            setLoading(false)
        }
    }
    return { createTarefa, loading, error }
}

export default UseCreateTarefas;