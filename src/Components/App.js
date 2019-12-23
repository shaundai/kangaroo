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

function deleteItem (key) {
  const items = { ...itemList };
  items[key] = null;
  setItemList(items);
}

function search (term) {
  console.log(`this needs actual functionality - see the app component and fix asap`)
}

  return (
    <div className="App">
        <Inventory addItem={addItem} itemList={itemList} updateItem={updateItem} deleteItem={deleteItem} />
        <FindItem itemList={itemList} onSearch={search} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
