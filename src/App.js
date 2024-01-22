import './App.css';
import { useState } from 'react';
import InputText from './components/InputText';
import Button from './components/Button';
import List from './components/List';
import Message from './components/Message';
import FloatButton from './components/FloatButton';
import {MdShoppingCart} from 'react-icons/md'
import Cart from './components/Cart';

function App() {

  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(0)
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [msg, setMsg] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [visibleCart, setVisibleCart] = useState(false)

  function handleChangeItem(e){
    setItem(e.target.value)
  }

  function handleChangeQuantity(e){
    setQuantity(e.target.value)
  }

  function handleClick(){
    if(item !== ""){
      setMsg("")
      setList([...list, {"id": id, "name":item, "quantity":quantity}])
      setId(id+1)
      setItem("")
      setQuantity(0)
      setTotalQuantity(totalQuantity + parseInt(quantity))
    }else{
      setMsg("Atenção! O valor do item não pode ser vazio")
    }
  }

  function handleDelete(id){
    const itemDelete = list.find((value) => value.id === id)
    setTotalQuantity(totalQuantity - itemDelete.quantity)
    setList(list.filter(item => item.id !== id));
  }

  return (
    <div className='container'>
      <Message msg={msg} status="error"/>
      <div className='add_container'>
        <div className='inputs'>  
          <InputText title="Item" name="name" type="text" placeholder="Informe um item" value={item ? item : ''} onChange={handleChangeItem}/>
          <InputText title="Quantidade" name="quantity" type="number" placeholder="Digite a quantidade" value={quantity ? quantity : ''} onChange={handleChangeQuantity}/>
        </div>
        <Button text="Adicionar" onClick={handleClick}/>
      </div>
      <List list={list} handleDelete={handleDelete}/>
      <Cart list={list} handleDelete={handleDelete}/>
      <FloatButton icon={<MdShoppingCart/>} quantity={totalQuantity}/>
    </div>
  );
}

export default App;
