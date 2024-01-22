import styles from './FloatButton.module.css'

export default function FloatButton({icon, quantity, onClick}){
    return (
        <div className={styles.float_button_container}>
            <span>{quantity}</span>
            <button onClick={onClick}>{icon}</button>
        </div>
    )
}