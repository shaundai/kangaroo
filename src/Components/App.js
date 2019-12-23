import React, { useState } from 'react';
import './App.css';
import Inventory from './Inventory';
import FindItem from './FindItem';

function App() {
  const [itemList, setItemList] = useState([{ name: "scissors", desc: "the scissors", box: 3, location: "here", owner: "sally", quantity: 4 },  {name: "brush", desc: "the brush", box: 3, location: "here", owner: "sally", quantity: 1 }])
  function addItem(item){
    const newItemList = {...itemList};
    newItemList[`item${Date.now()}`] = item
    setItemList(newItemList);
}

function updateItem (key, updatedItem) {
  //take copy of the current state
  const items = { ...itemList };
  //update the state to that of the updatedItem we took in
  items[key] = updatedItem;
  //set the state with the updatedItem'
  setItemList(items);
}

function search (term) {
  console.log(term)
}

  return (
    <div className="App">
        <Inventory addItem={addItem} itemList={itemList} updateItem={updateItem} />
        <FindItem itemList={itemList} onSearch={search} />
    </div>
  );
}

export default App;
