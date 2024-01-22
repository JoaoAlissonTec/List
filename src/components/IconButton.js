import styles from './IconButton.module.css'

export default function IconButton({onClick, icon, type}){
    return(
        <button className={`${styles.icon_button} ${styles[type]}`} onClick={onClick}>{icon}</button>
    )
}