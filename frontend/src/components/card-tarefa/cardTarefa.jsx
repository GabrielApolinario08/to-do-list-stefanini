import styles from './cardTarefa.module.css'
const CardTarefa = ({ title, description, status, edit, del }) => {
    return (
        <div className={styles["container-card"]}>
            <h2>{title}</h2>
            <p className={styles["descricao"]}>{description}</p>
            <p className={`${styles.status} ${styles[status.toLowerCase()]}`}>{status}</p>
            <div className={styles["container-btns"]}>
                <button onClick={edit} className={styles["btn-editar"]}>Editar</button>
                <button onClick={del} className={styles["btn-excluir"]}>Excluir</button>
            </div>
        </div>
    )
}

export default CardTarefa;