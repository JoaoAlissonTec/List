import styles from './List.module.css'
import Section from './Section';

export default function List({list, handleAdd}){
    const obj = Object.groupBy(list, itens=>itens.category)
    return(
        <div className={styles.list_container}>
                {list.length > 0 ? Object.keys(obj).map((value)=>(
                    <Section category={value} handleAdd={handleAdd} list={obj[value]}/>
                )):<p>Não há itens</p>}
        </div>
    )
}