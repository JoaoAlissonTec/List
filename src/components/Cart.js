import Item from "./Item";
import empty_cart from '../img/empty_car.png'
import styles from './Cart.module.css'

export default function Cart({list, handleDelete}){
    return (
        <div className={styles.cart_container} id="cart">
            <ul>
                {
                    list.length > 0 ? 
                    list.map((item)=>(<Item id={item.id} title={item.name} price={item.price*parseInt(item.quantity)} quantity={item.quantity} handleDelete={handleDelete} key={item.id}/>)) 
                    : <div className={styles.image}>
                        <img src={empty_cart} alt="Empty cart"/>
                        <h2>Seu carrinho está vazio.</h2>
                    </div>
                }
            </ul>
        </div>  
    )
}