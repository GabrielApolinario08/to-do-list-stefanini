import axios from "axios"


const useUpdateTarefa = () => {


    const updateTarefa = async (id, title, description, status) => {
        try {
            const updateData = {
                title: title,
                description: description,
                status: status
            }
            const response = await axios.put(`http://localhost:8080/tarefas/${id}`, updateData)
            console.log(response.data)
            return response.data;
        } catch (error) {
            window.alert("Erro ao atualizar tarefa.")
            console.error("Erro ao atualizar dados: ", error)
            return null;
        }
    }
    return { updateTarefa }
}

export default useUpdateTarefa