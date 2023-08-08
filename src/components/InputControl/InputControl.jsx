import styles from "../InputControl/InputControl.module.css";

export function InputControl(props) {
    return (
        <div className={styles.container}>
            { props.label && 
            <label className={styles.label}>{ props.label }</label>
            }
            <input className={styles.input} type="text" {...props}></input>
        </div>
    )
}