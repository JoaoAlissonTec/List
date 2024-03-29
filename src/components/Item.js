import styles from './Item.module.css'
import {MdFavoriteBorder, MdFavorite, MdDeleteOutline} from 'react-icons/md'
import { useState } from 'react';
import IconButton from './IconButton';

export default function Item({title, id, quantity, price, handleDelete}){
    const [status, setStatus] = useState(false)

    function handleFavorite(){
        if(status === true){
            setStatus(false)        
        }else{
            setStatus(true)
        }
    }

    return(
        <li className={styles.item_container}>
            <h1>{quantity} x {title}</h1>
            <p>{price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
            <div>
                <IconButton onClick={()=>handleDelete(id)} icon={<MdDeleteOutline/>} type="icon_item"/>
                <IconButton onClick={handleFavorite} icon={status?<MdFavorite color='red'/>:<MdFavoriteBorder/>} type="icon_item"/>
            </div>
        </li>
    )
}