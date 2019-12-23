import React from 'react';

 function EditItemForm(props) {

    function handleChange(e) {
        const updatedItem = {
            ...props.item,
            [e.currentTarget.name]: e.currentTarget.value
        }
        props.updateItem(props.index, updatedItem);
    }
    
        return (
            <div>
                <input name="name" type="text" onChange={handleChange} value={props.item.name} required></input>
                <input name="desc" type="text" onChange={handleChange} value={props.item.desc} ></input>
                <input name="owner" type="text" onChange={handleChange} value={props.item.owner} ></input>
                <input name="box"  type="text" onChange={handleChange} value={props.item.box} required></input>
                <input name="location" type="text" onChange={handleChange} value={props.item.location} ></input>
                <input name="quantity"  type="text" onChange={handleChange} value={props.item.quantity} ></input>
                <button onClick={()=>props.deleteItem(props.index)}>Delete Item</button>
            </div>
        )
}

export default EditItemForm;