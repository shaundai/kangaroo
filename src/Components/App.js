import React, { useState } from 'reactn';
import './App.css';
import Item from './Item';
import Inventory from './Inventory';

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
  itemList[key] = updatedItem
  //set the state with the updatedItem'
  setItemList(items)
}


  return (
    <div className="App">
        <Inventory addItem={addItem} itemList={itemList} updateItem={updateItem} />
        <ul>
        {Object.keys(itemList).map(key => <Item key={key} details={itemList[key]} />)}
        </ul>
    </div>
  );
}

export default App;
