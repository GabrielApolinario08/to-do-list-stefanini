import { BsXLg } from "react-icons/bs"
import styles from "./modal.module.css"
import Input from "../input/input"
import { useState } from "react"
import useUpdateTarefa from "../../hooks/putData"

const ModalUpdate = ({ closeModal, tarefa, setUpdateTarefa }) => {
    const [title, setTitle] = useState(tarefa.title || "")
    const [description, setDescription] = useState(tarefa.description || "")
    const [status, setStatus] = useState(tarefa.status || "")
    const { updateTarefa } = useUpdateTarefa()
    console.log(tarefa);
    const submit = async (e) => {
        e.preventDefault();
        if (title === "" || description === "" || status === "") {
            window.alert("Preencha todos os campos!");
            return;
        }

        const updateData = await updateTarefa(tarefa.id, title, description, status);
        if (updateData) {
            setUpdateTarefa(updateData); 
            closeModal();
        } 
    };
    return (
        <div>
            <div className={styles["overlay"]} onClick={closeModal}>
                <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
                    <header>
                        <h2>Atualizando Tarefa</h2>
                        <button type="button" className="bi bi-x-lg" onClick={closeModal}>
                            <BsXLg />
                        </button>
                    </header>
                    <form>
                        <Input label="Título" value={title} setValue={setTitle} />
                        <Input label="Descrição" value={description} setValue={setDescription} />
                        <div className={styles["select-container"]}>
                            <label htmlFor="">Status</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Selecione um status</option>
                                <option value="NAO_INICIADO">Não Iniciado</option>
                                <option value="EM_ANDAMENTO">Em Andamento</option>
                                <option value="CONCLUIDO">Concluido</option>
                            </select>
                        </div>
                        <button onClick={submit} className={styles["btn-add"]}>Atualizar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalUpdate