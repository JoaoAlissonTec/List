import styles from './Button.module.css'

export default function Button({text, onClick}){
    return (
        <div className={styles.button_container}>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}