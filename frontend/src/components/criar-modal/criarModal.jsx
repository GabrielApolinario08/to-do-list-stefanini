import { useState } from "react";
import Input from "../input/input";
import styles from "./criarModal.module.css"
import { BsXLg } from "react-icons/bs";import UseCreateTarefas from "../../hooks/postData";
''

const CriarModal = ({closeModal, addNewTarefa}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const {createTarefa, error} = UseCreateTarefas(title, description, status);

    const submit = async (e) => {
        e.preventDefault();
        if(title == "" || description == "" || status == "") {
            return;
        }

        const newData = await createTarefa(title, description, status)
        if(newData) {
            addNewTarefa(newData)
        }
    }
    return(
        <div className={styles["overlay"]}>
            <div className={styles["modal"]}>
                <header>
                <h2>Criando Nova Tarefa</h2>
                <button className="bi bi-x-lg" onClick={closeModal}><BsXLg/></button>
                </header>
                <form>
                    <Input label="Título" setValue={setTitle} value={title}/>
                    <Input label="Descrição" setValue={setDescription} value={description}/>
                    <div className={styles["select-container"]}>
                        <label htmlFor="">Status</label>
                        <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">Selecione um status</option>
                            <option value="NAO_INICIADO">Não Iniciado</option>
                            <option value="EM_ANDAMENTO">Em Andamento</option>
                            <option value="CONCLUIDO">Concluido</option>
                        </select>
                    </div>
                    <button onClick={submit} className={styles["btn-add"]}>Adicionar</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default CriarModal;