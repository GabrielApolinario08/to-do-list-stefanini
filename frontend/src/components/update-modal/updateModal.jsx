import { BsXLg } from "react-icons/bs"
import styles from "./updateModal.module.css"
import Input from "../input/input"

const UpdateModal = ({closeModal}) => {
    return (
        <div>
            <div className={styles["overlay"]}>
                <div className={styles["modal"]} onClick="">
                    <header>
                        <h2>Atualizando Tarefa</h2>
                        <button className="bi bi-x-lg" onClick={closeModal}><BsXLg /></button>
                    </header>
                    <form>
                        <Input label="Título" />
                        <Input label="Descrição" />
                        <div className={styles["select-container"]}>
                            <label htmlFor="">Status</label>
                            <select name="" id="">
                                <option value="">Selecione um status</option>
                                <option value="">Não Iniciado</option>
                                <option value="">Em Andamento</option>
                                <option value="">Concluido</option>
                            </select>
                        </div>
                    </form>
                    <button className={styles["btn-add"]}>Atualizar</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateModal