import React, { useState } from 'react';
import './App.css';
import Pouches from './Pouches';
import Item from './Item';

function App() {
  const [itemList, setItemList] = useState({ name: "scissors", desc: "the scissors", box: 3, location: "here", owner: "salle", quantity: 4 })
  return (
    <div className="App">
        <Pouches />
        <ul>
        {Object.keys(itemList).map(key => <Item key={key} details={itemList} />)}
        </ul>
    </div>
  );
}

export default App;
