import Button from "./Button";
import styles from './Product.module.css'
import {MdShoppingCart} from 'react-icons/md'

export default function Product({id, desc, price, img, handleAdd}){
    return (
        <div className={styles.product_container}>
            <img src={img} alt={desc}/>
            <div className={styles.product_info}>
                <h1>{desc}</h1>
                <p>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
                <div className={styles.product_button}>
                    <Button text={["Adicionar", <MdShoppingCart/>]} onClick={()=>handleAdd(id, desc, price, 1)}/>                
                </div>
            </div>
        </div>
    )
}