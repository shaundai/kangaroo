import React from 'react';

class EditItemForm extends React.Component {

    handleChange = (e) => {
        const updatedItem = {
            ...this.props.item,
            [e.currentTarget.name]: e.currentTarget.value
        }
        this.props.updateItem(this.props.index, updatedItem)
    }
    render(){
        return (
            <div>
            <input name="name" type="text" onChange={this.handleChange} value={this.props.item.name} placeholder="What is this?" required></input>
            <input name="desc" type="text" onChange={this.handleChange} value={this.props.item.desc} placeholder="Describe this item."></input>
            <input name="owner" type="text" onChange={this.handleChange} value={this.props.item.owner} placeholder="Who does this belong to? (ex. the cat, Sally)"></input>
            <input name="box"  type="text" onChange={this.handleChange} value={this.props.item.box} placeholder="Which box?" required></input>
            <input name="location" type="text" onChange={this.handleChange} value={this.props.item.location} placeholder="Where is this box?"></input>
            <input name="quantity"  type="text" onChange={this.handleChange} value={this.props.item.quantity} placeholder="Quantity"></input>
            <button type="submit">Add Item</button>
        </div>
        )
    }
}

export default EditItemForm;