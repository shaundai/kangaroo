import React from 'react';

class EditItemForm extends React.Component {

    handleChange = (e) => {
        const updatedItem = {
            ...this.props.item,
            [e.currentTarget.name]: e.currentTarget.value
        }
        this.props.updateItem(this.props.index, updatedItem);
    }
    
    render(){
        return (
            <div>
            <input name="name" type="text" onChange={this.handleChange} value={this.props.item.name} required></input>
            <input name="desc" type="text" onChange={this.handleChange} value={this.props.item.desc} ></input>
            <input name="owner" type="text" onChange={this.handleChange} value={this.props.item.owner} ></input>
            <input name="box"  type="text" onChange={this.handleChange} value={this.props.item.box} required></input>
            <input name="location" type="text" onChange={this.handleChange} value={this.props.item.location} ></input>
            <input name="quantity"  type="text" onChange={this.handleChange} value={this.props.item.quantity} ></input>
            <button>Delete Item</button>
        </div>
        )
    }
}

export default EditItemForm;