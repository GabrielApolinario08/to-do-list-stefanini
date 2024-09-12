import styles from "./input.module.css"

const Input = ({label, value, setValue}) => {

    return(
        <div className={styles["container-input"]}>
            <label htmlFor="">{label}</label>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
}

export default Input;