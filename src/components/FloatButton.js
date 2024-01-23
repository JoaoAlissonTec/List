import styles from './FloatButton.module.css'

export default function FloatButton({icon, quantity, onClick, status}){
    return (
        <div className={styles.float_button_container}>
            {!status && quantity > 0 && <span>{quantity}</span>}
            <button onClick={onClick}>{icon}</button>
        </div>
    )
}