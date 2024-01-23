import styles from './InputText.module.css'

export default function InputText({title, type, name, value, placeholder, onChange}) {
    return (
        <div className={styles.input_container}>
            {title && <label htmlFor={name}>{title}</label>}
            <input autoComplete='off' id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    );
}