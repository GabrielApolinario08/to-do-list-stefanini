import axios from "axios"
import { useEffect, useState } from "react";

const UseFetchTarefas = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchTarefasData = async () => {
            setLoading(true)
            try {
                const response = await axios.get("http://localhost:8080/tarefas")
                setData(response.data)
            } catch (error) {
                setError("Erro ao buscar dados.")
                console.error("Erro ao buscar dados: ", error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchTarefasData();
    }, [])
    return {data, loading, error};
}


export default UseFetchTarefas;  