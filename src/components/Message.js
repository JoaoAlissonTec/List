import styles from './Message.module.css'
import { useState, useEffect } from 'react'

export default function Message({msg, status}){
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
        {
            visible && (<div className={`${styles.message_container} ${styles[status]}`}>
                <p>{msg}</p>
            </div>)
        }
            
        </>
    )
}