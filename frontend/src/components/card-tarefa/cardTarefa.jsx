import styles from './cardTarefa.module.css'
const CardTarefa = ({ title, description, status }) => {
    return (
        <div className={styles["container-card"]}>
            <h2>Terminar To-Do-List</h2>
            <p className={styles["descricao"]}>Terminar minha aplicação FullStack para conseguir um emprego.</p>
            <p className={styles["status"]}>CONCLUIDO</p>
            <div className={styles["container-btns"]}>
                <button className={styles["btn-editar"]}>Editar</button>
                <button className={styles["btn-excluir"]}>Excluir</button>
            </div>
        </div>
    )
}

export default CardTarefa;