import styles from './InputText.module.css'

export default function InputText({title, name, value, placeholder, onChange}) {
    return (
        <div className={styles.input_container}>
            <label htmlFor={name}>{title}</label>
            <input autoComplete='off' id={name} name={name} type="text" placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    );
}