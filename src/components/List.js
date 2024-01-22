import Item from './Item';
import styles from './List.module.css'

export default function List({list, handleDelete}){

    return(
        <div className={styles.list_container}>
            <ul>
                {list.length > 0 ? list.map((value)=>(
                    <Item title={value.name} key={value.id} id={value.id} handleDelete={handleDelete}/>
                )):<p>Não há itens</p>}
            </ul>
        </div>
    )
}