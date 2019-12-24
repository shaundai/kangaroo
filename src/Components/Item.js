import React from 'react';

function Item(props) {
    const { name, desc, quantity, box, location, owner } = props.details; //destructuring like a bawse
        return (
            <li className="item">
                <h2>{name}</h2>
                <h3>Description: {desc}</h3>
                <p>Box Number: clickable link {box}</p>
                <p>Quantity: {quantity}</p>
                <p>Location: {location}</p>
                <p>Owner: {owner}</p>
                <button onClick={()=>{if (window.confirm('Are you sure you want to delete me?'))props.deleteItem(props.index)}}>Delete Item</button>
            </li>
        )
}

export default Item;