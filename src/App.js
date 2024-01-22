import './App.css';
import { useState } from 'react';
import InputText from './components/InputText';
import Button from './components/Button';
import List from './components/List';
import Message from './components/Message';

function App() {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [msg, setMsg] = useState("");

  function handleChange(e){
    setItem(e.target.value)
  }

  function handleClick(){
    if(item !== ""){
      setMsg("")
      setList([...list, {"id": id, "name":item}])
      setId(id+1)
      setItem("")
    }else{
      setMsg("Atenção! O valor do item não pode ser vazio")
    }
  }

  function handleDelete(id){
    setList(list.filter(item => item.id !== id));
  }

  return (
    <div className='container'>
      <Message msg={msg} status="error"/>
      <div className='add_container'>
        <InputText title="Item" name="name" placeholder="Informe um item" value={item ? item : ''} onChange={handleChange}/>
        <Button text="Adicionar" onClick={handleClick}/>
      </div>
      <List list={list} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
