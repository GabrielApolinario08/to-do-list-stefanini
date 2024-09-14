import { BsCheckCircleFill, BsHourglassSplit, BsXCircleFill } from 'react-icons/bs';
import styles from './cardTarefa.module.css'

const p = (status, conteudo, icon) => {
    return(
        <p className={`${styles.status} ${styles[status.toLowerCase()]}`}>{conteudo} {icon}</p>
    )
} 

const CardTarefa = ({ title, description, status, edit, del }) => {
    return (
        <div className={styles["container-card"]}>
            <h2>{title}</h2>
            <p className={styles["description"]}>{description}</p>
            {status == "NAO_INICIADO" ? p(status, "Não Iniciado", <BsXCircleFill/>)  : status == "EM_ANDAMENTO" ? p(status, "Em Andamento", <BsHourglassSplit/>) : p(status, "Concluído", <BsCheckCircleFill/>)}
            <div className={styles["container-btns"]}>
                <button onClick={edit} className={styles["btn-edit"]}>Editar</button>
                <button onClick={del} className={styles["btn-delete"]}>Excluir</button>
            </div>
        </div>
    )
}

export default CardTarefa;