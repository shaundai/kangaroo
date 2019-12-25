import React, { useState } from 'react';
import './App.css';
import Inventory from './Inventory';
import FindItem from './FindItem';

function App() {
  const [itemList, setItemList] = useState([{ name: "scissors", desc: "the scissors", box: 3, location: "here", owner: "sally", quantity: 4 },  {name: "brush", desc: "the brush", box: 3, location: "here", owner: "sally", quantity: 1 }])
  const [searchResults, setSearchResults] = useState([]);

  function addItem(item){
    const newItemList = {...itemList};
    newItemList[`item${Date.now()}`] = item
    setItemList(newItemList);
}

const updateItem = (key, updatedItem) => {
  //take copy of the current state
  const items = { ...itemList };
  //update the state to that of the updatedItem we took in
  items[key] = updatedItem;
  //set the state with the updatedItem'
  setItemList(items);
}

const deleteItem = (key) => {
  setItemList(itemList.filter(item => itemList[key] !== item));
  console.log(key)
}

const search = (term) => {
  //takes in the names or descriptions of any item
  //filters through to see if any of them contain words in the search term
  //returns terms with only terms searched for
  let results = itemList.filter(item => item.name.includes(term) || item.desc.includes(term))
  setSearchResults(results);
  console.log(searchResults)
}


  return (
    <div className="App">
        <Inventory addItem={addItem} itemList={itemList} updateItem={updateItem} deleteItem={deleteItem} />
        <FindItem itemList={itemList} onSearch={search} deleteItem={deleteItem} searchResults={searchResults} />
    </div>
  );
}

export default App;
