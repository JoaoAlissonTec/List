import './App.css';
import { useState } from 'react';
import InputText from './components/InputText';
import Message from './components/Message';
import FloatButton from './components/FloatButton';
import {MdShoppingCart} from 'react-icons/md'
import Cart from './components/Cart';
import List from './components/List';

function App() {

  const produtos = [
    {"id":0, "name":"Produto 1", "price":14.99, "image":"https://placehold.co/150"},
    {"id":1, "name":"Produto 2", "price":20.49, "image":"https://placehold.co/150"},
    {"id":2, "name":"Produto 3", "price":0.99, "image":"https://placehold.co/150"},
    {"id":3, "name":"Produto 4", "price":4.49, "image":"https://placehold.co/150"},
    {"id":4, "name":"Produto 5", "price":3.15, "image":"https://placehold.co/150"},
    {"id":5, "name":"Produto 6", "price":4.50, "image":"https://placehold.co/150"},
  ]

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [msg, setMsg] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [visibleCart, setVisibleCart] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])

  function handleChangeItem(e){
    setItem(e.target.value)
    e.target.value!==""?setFilterProducts(produtos.filter((item)=>item.name.includes(e.target.value))):setFilterProducts([])
  }

  function handleAddProduct(desc, price, quantity){
    setId(id+1)
    setList([...list, {"id": id, "name":desc, "price":price,"quantity":quantity}])
    setTotalQuantity(totalQuantity + parseInt(quantity))
    setMsg("")
  }

  function handleDelete(id){
    const itemDelete = list.find((value) => value.id === id)
    setTotalQuantity(totalQuantity - itemDelete.quantity)
    setList(list.filter(item => item.id !== id));
  }

  function handleCart(){
    setVisibleCart(!visibleCart)
  }

  return (
    <div className='container'>
      <Message msg={msg} status="error"/>
      <div className='add_container'>
        <div className='inputs'>  
          <InputText title="Pesquisar" name="name" type="text" placeholder="Pesquise um item" value={item ? item : ''} onChange={handleChangeItem}/>
        </div>
      </div>
      <List list={filterProducts.length > 0 ? filterProducts : produtos} handleAdd={handleAddProduct}/>
      {visibleCart && <Cart list={list} handleDelete={handleDelete}/>}
      <FloatButton icon={<MdShoppingCart/>} quantity={totalQuantity} onClick={handleCart} status={visibleCart}/>
    </div>
  );
}

export default App;
