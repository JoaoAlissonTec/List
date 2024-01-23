import Product from './Product';
import styles from './Section.module.css'

export default function Section({category, list, handleAdd}){
    return(
        <div className={styles.category_container}>
            <p>{category}</p>
            <ul>
                {list.map((item)=>
                    <Product id={item.id} desc={item.name} img={item.image} price={item.price} key={item.id} handleAdd={handleAdd}/>
                )}
            </ul>
        </div>
    )
}