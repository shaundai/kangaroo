import React from 'react';
import EditItemForm from './EditItemForm'
import AddItemForm from './AddItemForm';

function Inventory(props){
        return (
            <React.Fragment>
                <AddItemForm addItem={props.addItem} />
                {Object.keys(props.itemList).map(key => <EditItemForm key={key} index={key} item={props.itemList[key]} updateItem={props.updateItem} deleteItem={props.deleteItem} />)}
            </React.Fragment>
        )
}

export default Inventory;