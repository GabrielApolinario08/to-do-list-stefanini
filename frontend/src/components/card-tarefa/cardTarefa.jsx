import { BsCheckCircleFill, BsHourglassSplit, BsXCircleFill } from 'react-icons/bs';
import styles from './cardTarefa.module.css'
const CardTarefa = ({ title, description, status, edit, del }) => {
    return (
        <div className={styles["container-card"]}>
            <h2>{title}</h2>
            <p className={styles["description"]}>{description}</p>
            <p className={`${styles.status} ${styles[status.toLowerCase()]}`}>{status} {status == "NAO_INICIADO" ? <BsXCircleFill/> : status == "EM_ANDAMENTO" ? <BsHourglassSplit/>  : <BsCheckCircleFill/>}</p>
            <div className={styles["container-btns"]}>
                <button onClick={edit} className={styles["btn-edit"]}>Editar</button>
                <button onClick={del} className={styles["btn-delete"]}>Excluir</button>
            </div>
        </div>
    )
}

export default CardTarefa;