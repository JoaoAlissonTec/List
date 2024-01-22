import Item from "./Item";
import styles from './Cart.module.css'

export default function Cart({list, handleDelete}){
    return (
        <div className={styles.cart_container}>
            <ul>
                {list.length > 0 ? list.map((item)=>(<Item id={item.id} title={item.name} quantity={item.quantity} handleDelete={handleDelete} key={item.id}/>)) : <p>Não há itens</p>}
            </ul>
        </div>  
    )
}