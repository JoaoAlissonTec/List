import styles from './List.module.css'
import Product from './Product';

export default function List({list, handleAdd}){

    return(
        <div className={styles.list_container}>
            <ul>
                {list.length > 0 ? list.map((value)=>(
                    <Product id={value.id} desc={value.name} img={value.image} price={value.price} key={value.id} handleAdd={handleAdd}/>
                )):<p>Não há itens</p>}
            </ul>
        </div>
    )
}