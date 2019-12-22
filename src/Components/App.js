import React, { useState } from 'react';
import './App.css';
import Pouches from './Pouches';
import Item from './Item';
import AddItemForm from './AddItemForm';

function App() {
  const [itemList, setItemList] = useState([{ name: "scissors", desc: "the scissors", box: 3, location: "here", owner: "sally", quantity: 4 },  {name: "brush", desc: "the brush", box: 3, location: "here", owner: "sally", quantity: 1 }])

  function addItem(item){
    const newItemList = {...itemList};
    newItemList[`item${Date.now()}`] = item
    setItemList(newItemList);
}
  return (
    <div className="App">
        <AddItemForm addItem={addItem} />
        <Pouches />
        <ul>
        {Object.keys(itemList).map(key => <Item key={key} details={itemList[key]} />)}
        </ul>
    </div>
  );
}

export default App;
